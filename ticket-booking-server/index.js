/** @format */

const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nvffntx.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	try {
		// Connect the client to the server	(optional starting in v4.7)
		await client.connect();

		const onGoingBusCollections = client
			.db("e-Ticket_booking")
			.collection("toDaysBusQue");
		const busOperatorsCollections = client
			.db("e-Ticket_booking")
			.collection("busOperators");
		const busNumbersCollections = client
			.db("e-Ticket_booking")
			.collection("busNumbers");
		const allBusInfoCollections = client
			.db("e-Ticket_booking")
			.collection("allBusInfo");

		app.get("/on_going_bus", async (req, res) => {
			const fromCity = req.query.fromCity;
			const toCity = req.query.toCity;
			const doj = req.query.doj;


			const query = {
				startingPoint: fromCity,
				endingPoint: toCity,
				journeyDate: doj,
			};

			const result = await onGoingBusCollections.find(query).toArray();
				
			
			res.send(result);
		});


		app.get('/get-all-bus-operators', async (req, res) => {
			const busOperator = await busOperatorsCollections.find().toArray();

			res.send(busOperator);
		})

		app.get('/get-bus-number', async (req, res) => {
			const busOperatorName = req?.query?.operatorName;
			const busNumbers = await busNumbersCollections
				.find({
					busOperatorName,
				})
				.toArray();

			res.send(busNumbers);
		})

	
		// set bus deule for admin 
		app.post('/set-bus-on-sedule', async (req, res) => {
			const busInfo = req.body;
			const extraInfo = await allBusInfoCollections.findOne({
				busNumber: busInfo?.busNumber,
			});

			const newBusSedule = {
				...busInfo,
				...extraInfo,
				bookedSits: 0,
				bookedSitsNumber:[]
			};
			
			
			const addNewBusOnSedule = await onGoingBusCollections.insertOne(newBusSedule)

			console.log(addNewBusOnSedule);
			res.send(addNewBusOnSedule);
		})

		app.post('/add-new-bus', async (req, res) => {
			const newBusInfo = req.body;

			console.log(newBusInfo)

			res.send({})
		})

		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} finally {
		// Ensures that the client will close when you finish/error
		// await client.close();
	}
}
run().catch(console.dir);

app.get("/health", (req, res) => {
	res.send("e-Ticket-Booking Server running...");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
