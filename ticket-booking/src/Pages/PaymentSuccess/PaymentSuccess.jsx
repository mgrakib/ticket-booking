import { Button, Tooltip, Zoom } from "@mui/material";
import Container from "../../Components/Container/Container";
import { Link, useParams } from "react-router-dom";


import logo from "../../../public/logo.png";
import paid from "../../assets/paid.png";
import { BsPrinter } from "react-icons/bs";
import ReactDOMServer from 'react-dom/server';
import { useDownloadTicketMutation, useGetPaymentReceptQuery} from "../../redux/features/api/baseAPI";
import Processing from "../../Components/Processing/Processing";
const PaymentSuccess = () => {
	const { tran_id } = useParams();
	const {data: paymentHistory, isLoading:paymentInfoLoading} = useGetPaymentReceptQuery(tran_id);
	const [getPDF, { data: pdfData, isLoading:downloadPDFLoading }] =
		useDownloadTicketMutation();

	const handleGeneratePdf = () => {
		getPDF(tran_id)
		console.log("btn click");
	}

	
    return (
		<div className='mt-20 mb-5 md:mt-5 py-5 w-full '>
			<Container>
				<div className=' h-[80vh] flex items-center justify-center'>
					<div className='p-5 px-2 md:p-10 w-[95%] md:w-[50%] text-center shadow-[0_0_10px_#21905150] inline-block mx-auto rounded-md'>
						<div className='w-[40px] h-[40px] mx-auto'>
							<img
								src='https://i.ibb.co/5M4QmrW/success-tick.png'
								alt=''
							/>
						</div>
						<p className='text-[#219051] text-2xl mt-2'>
							Payment Successful
						</p>

						<div className='my-8 md:my-14'>
							<div className='text-[13px] md:text-[14px] flex flex-col gap-1'>
								<div className='flex items-center justify-between font-semibold'>
									<p className='text-gray-500'>
										Payment type
									</p>
									<p className='text-gray-900'>Net Banking</p>
								</div>
								<div className='flex items-center justify-between font-semibold'>
									<p className='text-gray-500'>Mobile</p>
									{paymentInfoLoading ? (
										<p className=' animate-pulse text-red-500'>
											123456789
										</p>
									) : (
										<p className=' text-red-500'>
											{paymentHistory?.passengerMobileNo}
										</p>
									)}
								</div>
								<div className='flex items-center justify-between font-semibold'>
									<p className='text-gray-500'>Email</p>
									{paymentInfoLoading ? (
										<p className=' animate-pulse text-gray-900'>
											example@gmail.com
										</p>
									) : (
										<p className='text-gray-900'>
											{paymentHistory?.passengerEmail}
										</p>
									)}
								</div>
								<div className='flex items-center justify-between font-semibold my-2'>
									<p className='text-gray-500'>Amount Paid</p>
									{paymentInfoLoading ? (
										<p className=' animate-pulse text-gray-900 text-[17px] font-bold'>
											0000
										</p>
									) : (
										<p className='text-gray-900 text-[17px] font-bold'>
											{parseFloat(
												paymentHistory?.totalAmount
											).toFixed(2)}
										</p>
									)}
								</div>
								<div className='flex items-center justify-between font-semibold'>
									<p className='text-gray-500'>
										Transation Id
									</p>
									{paymentInfoLoading ? (
										<p className=' animate-pulse text-gray-900 '>
											tranxId
										</p>
									) : (
										<p className='text-gray-900'>
											{tran_id}
										</p>
									)}
								</div>
								<div className='flex items-center justify-between font-semibold'>
									<p className='text-gray-500'>Invoice No</p>
									{paymentInfoLoading ? (
										<p className=' animate-pulse text-red-500'>
											Invoice Id
										</p>
									) : (
										<p className='text-red-500'>
											{paymentHistory?.invoiceNumber}
										</p>
									)}
								</div>
								<div className='text-[12px] md:text-[13px] text-start mt-2 text-red-500 '>
									<p>
										NB:{" "}
										<span>
											"Memorize or save your phone and
											invoice numbers to download your
											Ticket after"
										</span>
									</p>
								</div>
							</div>
						</div>

						<div className='flex items-center justify-center gap-2'>
							<div>
								{/* <Link to={`/invoice/${tran_id}`}> */}
								<Button
									onClick={handleGeneratePdf}
									className='text-white bg-[#219051]'
								>
									PRINT
								</Button>
								{/* </Link> */}
							</div>
							<div>
								<Link to={'/'}>
									<Button className='text-white bg-[#219051]'>
										CLOSE
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Container>

			{downloadPDFLoading && <Processing />}
		</div>
	);
};

export default PaymentSuccess;