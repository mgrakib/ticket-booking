/** @format */



import cheapTicket from "../../../../public/chep_ticket.png";
import experiance from "../../../../public/experiance.png";
import online_payment from "../../../../public/online_payment.png";
import Container from "../../Container/Container";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const WhyBookWithUs = () => {
	return (
		<div className='py-10'>
			<SectionTitle title={"Why Book with us"} />
			<Container>
				<div className='mt-10'>
					<div className='grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 text-center'>
						<div className='col-span-1 md:col-span-4 flex flex-col items-center'>
							<div>
								<img
									src={cheapTicket}
									width={120}
									height={120}
									alt='cheap ticket'
								/>
							</div>
							<div>
								<p className='text-xl font-semibold '>
									Cheap Bus Ticket
								</p>

								<p className='text-gray-600'>
									Affordable bus travel, endless adventures.
									Your budget-friendly journey begins here.
									Explore more, pay less with our unbeatable
									ticket prices.
								</p>
							</div>
						</div>
						<div className='col-span-1 md:col-span-4 flex flex-col items-center'>
							<div>
								<img
									src={experiance}
									width={120}
									height={120}
									alt='cheap ticket'
								/>
							</div>
							<div>
								<p className='text-xl font-semibold '>
									We Have Experience
								</p>

								<p className='text-gray-600'>
									Backed by years of expertise as bus owners,
									we offer unmatched bus travel experiences.
									Our commitment to quality ensures your
									satisfaction on every journey.
								</p>
							</div>
						</div>
						<div className='col-span-1 md:col-span-4 flex flex-col items-center'>
							<div>
								<img
									src={online_payment}
									width={120}
									height={120}
									alt='cheap ticket'
								/>
							</div>
							<div>
								<p className='text-xl font-semibold '>
									Online Payment Safety
								</p>

								<p className='text-gray-600'>
									Convenient online payment options simplify
									booking. Securely pay for your bus tickets
									online, making travel planning effortless
									and hassle-free.
								</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default WhyBookWithUs;
