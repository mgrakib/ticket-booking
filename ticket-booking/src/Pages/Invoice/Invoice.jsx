/** @format */

import "./Invoice.css";
import logo from "../../../public/logo.png";
import paid from '../../assets/paid.png'


import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { BsPrinter } from "react-icons/bs";
import { Tooltip, Zoom } from "@mui/material";
import { useGetPaymentReceptQuery } from "../../redux/features/api/baseAPI";
import { useParams } from "react-router-dom";
import moment from "moment";


const Invoice = () => {
	const { tran_id } = useParams();

	const { data: paymentHistory={}, isLoading } =
		useGetPaymentReceptQuery(tran_id);

	
	const pdfRef = useRef();
	const downloadBtn = () => {
		const input = pdfRef.current;
		html2canvas(input).then(canvas => {
			const imgData = canvas.toDataURL("image/png");
			const pdf = new jsPDF("p", "mm", "a4");
			const pdfWidth = pdf.internal.pageSize.getWidth();
			const pdfHeight = pdf.internal.pageSize.getHeight();
			const imgWidth = canvas.width;
			const imgHeight = canvas.height;

			const ratio = Math.max(pdfWidth / imgWidth, pdfHeight / imgHeight);
			const imgX = (pdfWidth - imgWidth * ratio) / 2;
			const imgY = 0;
			pdf.addImage(
				imgData,
				"PNG",
				imgX,
				imgY,
				imgWidth * ratio,
				imgHeight * ratio
			);
			pdf.save("invoice.pdf");
		});
	};
	const {
		busOperatorName,
		
busNumber,

		email,
		journeyDate,
		passengerMobileNo,
		passengerInfo,
		totalAmount,
		paymentDate,
		isAC,
		endingPoint,
		invoiceNumber,
		startingPoint,
		startingTime,
	} = paymentHistory || {};


	console.log(paymentHistory);
	return (
		<div className='mt-5'>
			<div
				className=''
				ref={pdfRef}
			>
				<div className='w-[793.70px] h-[1122.52px] border  mx-auto relative'>
					{/* top  */}
					<div className='grid grid-cols-2 gap-5'>
						{/* company logo name  */}
						<div className='col-span-1 relative'>
							<div className='absolute left-0 top-0 h-[100px] w-full bg-[#89B837] angle-traingel'></div>
							<div className='absolute left-0 top-0 h-[110px] w-[95%] bg-[#7BA630] angle-traingel2'></div>
							<div className='absolute left-0 top-0 h-[120px] w-[90%] bg-[#2A3547] angle-traingel3'></div>

							<div className='absolute left-[48px] top-8  leading-3 '>
								<p className='text-xl font-bold text-white'>
									COMPANY NAME
								</p>
								<p className='text-[13px] tracking-[0.9px] text-gray-300'>
									Skip the Line, Buy Online.
								</p>
							</div>
							<div className='absolute w-[200px] -right-14 top-5'>
								<img
									src={logo}
									alt=''
									className='transform scale-x-[-1]'
								/>
							</div>
						</div>
						{/* invoice number date  */}
						<div className='col-span-1 text-right mt-8 pr-[48px]'>
							<div className=' max-w-[165px] ml-auto'>
								<p className='text-4xl font-bold tracking-[3px] text-[#91BB38]'>
									INVOICE
								</p>
								<div className='mt-1'>
									<div className='flex items-center justify-between text-[11px] font-bold mt-1 text-gray-800'>
										<p>Invoice Number:</p>
										<p>#{invoiceNumber}</p>
									</div>
									<div className='flex items-center justify-between text-[11px] font-bold mt-1 text-gray-800'>
										<p>Invoice Date:</p>
										<p>{paymentDate}</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* body  */}
					<div className='px-[48px]'>
						{/* passanger and bus info  */}
						<div className='mt-10 '>
							<div className='flex items-start justify-between'>
								<div>
									<p className='text-[16px] font-semibold'>
										Passenger Info:
									</p>
									<div className='text-[12px] text-gray-500'>
										<p>
											{passengerInfo?.[0]?.passengerName}
										</p>

										<p>{passengerMobileNo}</p>
										<p>{email}</p>
									</div>
								</div>
								<div className='text-right'>
									<p className='text-[16px] font-semibold'>
										{busOperatorName}
									</p>
									<div className='text-[12px] text-gray-500'>
										<p>450 E 96th St, United States</p>
										<p>+153 5463 2548</p>
										<p>info@Greenlineexpress.com</p>
									</div>
								</div>
							</div>
						</div>

						{/* ticket info  */}
						<div className='mt-10 flex flex-col gap-10 min-h-[580px]  '>
							{/* journy info  */}
							<div>
								<div className='py-2 px-3 bg-[#8AB937] flex items-center text-white'>
									<div className='w-[30%]'>
										<p className='font-bold'>From:</p>
									</div>
									<div className='flex-1'>
										<p className='font-bold'>To:</p>
									</div>
									<div className='w-[25%]'>
										<p className='font-bold'>
											Date of Journey:
										</p>
									</div>
								</div>
								<div className='py-2 px-3 bg-[#F7F8FA] flex items-center '>
									<div className='w-[30%]'>
										<p className='text-[14px] '>
											{startingPoint}
										</p>
									</div>
									<div className='flex-1'>
										<p className='text-[14px] '>
											{endingPoint}
										</p>
									</div>
									<div className='w-[25%]'>
										<p className='text-[14px] '>
											{journeyDate}
										</p>
									</div>
								</div>
							</div>

							{/* Reporting Time  */}
							<div>
								<div className='py-2 px-3 bg-[#8AB937] flex items-center text-white'>
									<div className='w-[30%]'>
										<p className='font-bold'>
											Reporting Time:
										</p>
									</div>
									<div className='w-[30%]'>
										<p className='font-bold'>
											Departure Time:
										</p>
									</div>
									<div className='flex-1'>
										<p className='font-bold'>Status:</p>
									</div>
									<div className='w-[25%]'>
										<p className='font-bold'>Ticked ID:</p>
									</div>
								</div>
								<div className='py-2 px-3 bg-[#F7F8FA] flex items-center '>
									<div className='w-[30%]'>
										<p className='text-[14px] '>
											{moment(startingTime, "HH:mm")
												.subtract(30, "minutes")
												.format("h:mm a")}
										</p>
									</div>
									<div className='w-[30%]'>
										<p className='text-[14px] '>
											{moment(
												startingTime,
												"HH:mm"
											).format("h:mm a")}
										</p>
									</div>
									<div className='flex-1'>
										<p className='text-[14px] '>Booked</p>
									</div>
									<div className='w-[25%]'>
										<p className='text-[14px] '>
											{tran_id}
										</p>
									</div>
								</div>
							</div>

							{/* Passenger  info  */}

							<div>
								<div className='py-2 px-3 bg-[#8AB937] flex items-center text-white'>
									<div className='w-[30%]'>
										<p className='font-bold'>
											Passenger Name:
										</p>
									</div>
									<div className='flex-1'>
										<p className='font-bold'>Seat No:</p>
									</div>
									<div className='w-[25%]'>
										<p className='font-bold'>Gender:</p>
									</div>
								</div>
								<div className='flex flex-col gap-1 mt-1'>
									{passengerInfo?.map((passenger, index) => {
										const { gender, passengerName, seat } =
											passenger;
										return (
											<div
												key={index}
												className='py-2 px-3 bg-[#F7F8FA] flex items-center '
											>
												<div className='w-[30%]'>
													<p className='text-[14px] '>
														{seat}
													</p>
												</div>
												<div className='flex-1'>
													<p className='text-[14px] '>
														{passengerName}
													</p>
												</div>
												<div className='w-[25%]'>
													<p className='text-[14px] '>
														{gender}
													</p>
												</div>
											</div>
										);
									})}
								</div>
							</div>

							{/* journy info  */}
							<div>
								<div className='py-2 px-3 bg-[#8AB937] flex items-center text-white'>
									<div className='w-[30%]'>
										<p className='font-bold'>Travels:</p>
									</div>
									<div className='flex-1'>
										<p className='font-bold'>Bus Number:</p>
									</div>
									<div className='flex-1'>
										<p className='font-bold'>Bus Type:</p>
									</div>
									<div className='w-[25%]'>
										<p className='font-bold'>
											Boarding Point:
										</p>
									</div>
								</div>
								<div className='py-2 px-3 bg-[#F7F8FA] flex items-center '>
									<div className='w-[30%]'>
										<p className='text-[14px] '>
											{busOperatorName}
										</p>
									</div>
									<div className='flex-1'>
										<p className='text-[14px] '>
											{busNumber}
										</p>
									</div>
									<div className='flex-1'>
										<p className='text-[14px] '>
											{isAC ? "AC" : "N-AC"}
										</p>
									</div>
									<div className='w-[25%]'>
										<p className='text-[14px] '>---</p>
									</div>
								</div>
							</div>
						</div>

						{/* total taka  */}

						<div className='mt-5'>
							<div className='py-2 px-3 bg-[#F3F3F3] flex'>
								<div className='flex items-center justify-between  w-[30%] ml-auto '>
									<p className='text-[16px] font-bold'>
										Total:
									</p>
									<p>{parseFloat(totalAmount).toFixed(2)}</p>
								</div>
							</div>
						</div>

						<div className='mt-14'>
							<div>
								<p className='font-bold'>NOTE:</p>
								<p className='text-[12px] text-gray-500'>
									This is computer generated receipt and does
									not require physical signature.
								</p>
							</div>
						</div>

						<div className='mt-2 flex justify-center items-center'>
							<Tooltip
								TransitionComponent={Zoom}
								title='Print'
							>
								<button
									onClick={() => {
										console.log(";");
										downloadBtn();
									}}
									className='p-3 bg-blue-200 hover:bg-[#242437] hover:text-white rounded duration-500 text-[16px]'
								>
									<BsPrinter />
								</button>
							</Tooltip>
						</div>
					</div>

					{/* paid sile  */}
					<div className='w-[100px] absolute left-16 bottom-40'>
						{/* ractiangular  */}
						{/* <img
						src='https://i.ibb.co/F5KMkRx/image.png'
						alt=''
                    /> */}
						{/* circle  */}

						<img
							src={paid}
							alt=''
						/>
					</div>

					<div className=' bg-[#8AB937] rounded-tl-full absolute bottom-0 left-0 w-full'>
						<div className='w-[98%] bg-[#242437] rounded-tl-full py-[10px] px-[48px] ml-auto'>
							<div className='flex items-center justify-between text-white text-[12px]'>
								<div>
									<p>www.e-ticket.com</p>
								</div>
								<div>
									<p>+880 1811115794</p>
								</div>
								<div>
									<p>info@e-ticket.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Invoice;
