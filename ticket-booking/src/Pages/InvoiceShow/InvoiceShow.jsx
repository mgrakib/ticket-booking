import { Button } from "@mui/material";
import Container from "../../Components/Container/Container";
import Marquee from "react-fast-marquee";
import { TbInfoTriangleFilled } from "react-icons/tb";
import { useDownloadTicketMutation, useFindTicketQuery } from "../../redux/features/api/baseAPI";
import { useState } from "react";
import { Link } from "react-router-dom";
import Processing from "../../Components/Processing/Processing";

const InvoiceShow = () => {
    const [infoForTicket, setInfoForTicket] = useState({
		invoiceNumber: "",
		passengerMobileNo: "",
	});
    const { data: ticketInfo, isLoading } = useFindTicketQuery({ ...infoForTicket });

    const handelFindTicket = (event) => {
        event.preventDefault()
        const form = event?.target;
        const passengerMobileNo = form?.passengerMobileNo?.value;
        const invoice = form?.invoice?.value;
       setInfoForTicket(prev => ({
			...prev,
			invoiceNumber: invoice,
			passengerMobileNo
		}));

        

    }

	const [generatePDF, { data: pdfDate, isLoading:pdfLoding }] =
		useDownloadTicketMutation();
	
    
    const {
		invoiceNumber,
		busOperatorName,
		busNumber,
		journeyDate,
		startingPoint,
		endingPoint,
		tran_id,
	} = ticketInfo || {};

    console.log(pdfLoding);
    return (
		<div>
			<Container>
				<div className='my-10 py-2 px-3 rounded bg-[#219051] text-white '>
					<Marquee
						pauseOnHover
						speed={100}
					>
						I can be a React component, multiple React components,
						or just some text.
					</Marquee>
				</div>

				<div className='mt-10 flex flex-col md:flex-row items-start justify-between'>
					{/* input info  */}
					<div className='w-full md:w-[20%] order-2 md:order-1'>
						<p className='text-xl  text-[#219051]'>
							Find Your Ticket
						</p>

						<form onSubmit={handelFindTicket}>
							<div className='mt-5 flex flex-col gap-5'>
								<div className='flex flex-col'>
									<label htmlFor='invoice'>
										Invoice Number *
									</label>
									<div className=' bg-white border border-gray-400 rounded-md overflow-hidden '>
										<input
											type='text'
											id='invoice'
											name='invoice'
											className='py-1 px-3  bg-transparent outline-none w-full neumorphism-input-field'
											placeholder='Invoice Number'
										/>
									</div>
								</div>

								<div className='flex flex-col'>
									<label htmlFor='passengerMobileNo'>
										Mobile *
									</label>
									<div className=' bg-white border border-gray-400 rounded-md overflow-hidden'>
										<input
											type='text'
											id='passengerMobileNo'
											name='passengerMobileNo'
											className='py-1 px-3  bg-transparent outline-none w-full neumorphism-input-field'
											placeholder='Mobile Number'
										/>
									</div>
								</div>

								<div className='mt-5'>
									<Button
										type='submit'
										className='bg-[#219051] text-white w-full'
									>
										Get Ticket
									</Button>
								</div>
							</div>
						</form>
					</div>
					{/* ticket info  */}
					<div className='w-[100%] md:w-[70%] order-1 md:order-2 '>
						<div className='py-2 '>
							<div className='p-5 border border-red-300 rounded-md'>
								<div className='flex items-center gap-8 justify-center'>
									<div>
										<TbInfoTriangleFilled className='text-3xl text-red-400' />
									</div>

									<div>
										<p className='text-gray-500'>
											"For quick ticket retrieval, provide
											your mobile number and transaction
											ID. Our secure process ensures easy
											access to your event details, making
											your experience hassle-free."
										</p>
									</div>
								</div>
							</div>
							<div className="overflow-x-auto">
								{/* journy info  */}
								<div className='mt-5 min-w-[800px]'>
									<div className='py-2 px-3 bg-[#8AB937] flex items-center text-white'>
										<div className='w-[15%]'>
											<p className='font-bold'>
												Invoice No
											</p>
										</div>
										<div className='w-[20%]'>
											<p className='font-bold'>
												Bus Name
											</p>
										</div>
										<div className='w-[15%]'>
											<p className='font-bold'>
												Bus Number
											</p>
										</div>
										<div className='w-[15%]'>
											<p className='font-bold'>
												Journy Date
											</p>
										</div>
										<div className='w-[13%]'>
											<p className='font-bold'>From</p>
										</div>
										<div className='w-[12%]'>
											<p className='font-bold'>To</p>
										</div>
										<div className='w-[10%]'>
											<p className='font-bold'></p>
										</div>
									</div>
									<div>
										{ticketInfo ? (
											<div className='mt-5 py-2 px-3 bg-[#F7F8FA] flex items-center '>
												<div className='w-[15%]'>
													<p className=''>
														{invoiceNumber}
													</p>
												</div>
												<div className='w-[20%]'>
													<p className=''>
														{busOperatorName}
													</p>
												</div>
												<div className='w-[15%]'>
													<p className=''>
														{busNumber}
													</p>
												</div>
												<div className='w-[15%]'>
													<p className=''>
														{journeyDate}
													</p>
												</div>
												<div className='w-[13%]'>
													<p className=''>
														{startingPoint}
													</p>
												</div>
												<div className='w-[12%]'>
													<p className=''>
														{endingPoint}
													</p>
												</div>
												<div className='w-[10%] '>
													<Button
														onClick={() =>
															generatePDF(tran_id)
														}
														size='small'
														className='text-white bg-[#219051] w-full rounded-md '
													>
														Ticket
													</Button>
												</div>
											</div>
										) : (
											<div className='ml-5 md:text-center w-full text-gray-600 mt-3'>
												No ticket
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{pdfLoding && <Processing />}
			</Container>
		</div>
	);
};

export default InvoiceShow;