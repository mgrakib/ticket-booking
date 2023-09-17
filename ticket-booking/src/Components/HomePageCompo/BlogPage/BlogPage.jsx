/** @format */


import { BsCalendarCheck } from "react-icons/bs";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Container from "../../Container/Container";

const BlogPage = () => {
	return (
		<div>
			<SectionTitle title={"Recent Blog Post"} />
			<Container>
				<div className='py-10 '>
					<div className='flex flex-col md:flex-row justify-between md:gap-y-5 gap-y-0'>
						<div
							className='w-full md:w-[30%]  rounded group shadow-[0_0_2px_rgba(0,0,0,
							5)]'
						>
							<div className='w-full flex overflow-hidden rounded'>
								<img
									src='https://i.ibb.co/jLPShSr/image.png'
									width={1000}
									height={1000}
									alt='blog bus image'
									className='group-hover:scale-105 duration-200'
								/>
							</div>
							<div className='px-5'>
								<div className='flex items-center gap-2 py-4 border-b border-[#26a85e72]'>
									<BsCalendarCheck className='text-[#26A85E]' />

									<p className='text-gray-500'>19 Feb 2022</p>
								</div>

								<div className='py-4'>
									<h2 className='text-2xl font-bold cursor-pointer hover:text-[#26a85e] duration-200'>
										The standard Lorem Ipsum...
									</h2>

									<p className='mt-2'>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										ali...
									</p>
								</div>
							</div>
						</div>
						<div className='w-full md:w-[30%]  rounded group'>
							<div className='w-full flex overflow-hidden rounded'>
								<img
									src='https://i.ibb.co/37tCmHj/image.png'
									width={1000}
									height={1000}
									alt='blog bus image'
									className='group-hover:scale-105 duration-200'
								/>
							</div>
							<div className='px-5'>
								<div className='flex items-center gap-2 py-4 border-b border-[#26a85e72]'>
									<BsCalendarCheck className='text-[#26A85E]' />

									<p className='text-gray-500'>19 Feb 2022</p>
								</div>

								<div className='py-4'>
									<h2 className='text-2xl font-bold cursor-pointer hover:text-[#26a85e] duration-200'>
										The standard Lorem Ipsum...
									</h2>

									<p className='mt-2'>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										ali...
									</p>
								</div>
							</div>
						</div>
						<div className='w-full md:w-[30%]  rounded group'>
							<div className='w-full flex overflow-hidden rounded'>
								<img
									src='https://i.ibb.co/nMGMfwf/image.png'
									width={1000}
									height={1000}
									alt='blog bus image'
									className='group-hover:scale-105 duration-200'
								/>
							</div>
							<div className='px-5'>
								<div className='flex items-center gap-2 py-4 border-b border-[#26a85e72]'>
									<BsCalendarCheck className='text-[#26A85E]' />

									<p className='text-gray-500'>19 Feb 2022</p>
								</div>

								<div className='py-4'>
									<h2 className='text-2xl font-bold cursor-pointer hover:text-[#26a85e] duration-200'>
										The standard Lorem Ipsum...
									</h2>

									<p className='mt-2'>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										ali...
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='mt-2 flex items-center justify-center'>
						<button className='py-2 px-5 bg-[#0E9E4D] text-white rounded'>
							View Blogs
						</button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default BlogPage;
