/** @format */

import { Button } from "@mui/material";
import Container from "../../Container/Container";



const ContactUs = () => {
	return (
		<div className='md:py-10'>
			<Container>
				<div className=''>
					<div className='flex flex-col md:flex-row items-center gap-5'>
						{/* from  */}
						<div className='w-full md:w-[40%] text-center'>
							<div className='p-2 md:p-5'>
								<h1 className='text-3xl font-bold'>
									Contact Us
								</h1>

								<div className='mt-4 flex flex-col gap-5'>
									<div className='bg-[#EDF2F6] '>
										<input
											type='text'
											name=''
											id=''
											className='bg-transparent py-2 w-full outline-none px-2'
											placeholder='Name'
										/>
									</div>
									<div className='bg-[#EDF2F6] '>
										<input
											type='text'
											name=''
											id=''
											className='bg-transparent py-2 w-full outline-none px-2'
											placeholder='E-mail Address'
										/>
									</div>
									<div className='bg-[#EDF2F6] '>
										<textarea
											name=''
											id=''
											className='bg-transparent py-2 w-full outline-none px-2 h-[120px]'
											placeholder='Message'
										></textarea>
									</div>

									<div>
										<Button className='py-2 w-full bg-[#26A85E] text-white'>
											Send Message
										</Button>
									</div>
								</div>
							</div>
						</div>

						{/* map  */}
						<div className='w-full md:w-[60%] bg-blue-500 h-[60vh]'>
							<div className='w-full h-full bg-green-400'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.328095322884!2d90.36612287413844!3d23.806929386606047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c8c30!2sMirpur%2010%20Roundabout%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1693841136486!5m2!1sen!2sbd'
									width={"100%"}
									height={"100%"}
									allowFullScreen=''
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default ContactUs;
