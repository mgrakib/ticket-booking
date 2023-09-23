import { Button } from "@mui/material";
import Container from "../../Components/Container/Container";
import { Link, useParams } from "react-router-dom";
import Invoice from "../Invoice/Invoice";


const PaymentSuccess = () => {
	const { tran_id } = useParams();

    return (
		<div className='py-5 w-full '>
			<Container>
				<div className=' h-[80vh] flex items-center justify-center'>
					<div className='p-10 w-[50%] text-center shadow-[0_0_10px_#21905150] inline-block mx-auto rounded-md'>
						<div className='w-[40px] h-[40px] mx-auto'>
							<img
								src='https://i.ibb.co/5M4QmrW/success-tick.png'
								alt=''
							/>
						</div>
						<p className='text-[#219051] text-2xl mt-2'>
							Payment Successful
						</p>

						<div className='my-14'>
							<div className='text-[14px] flex flex-col gap-1'>
								<div className='flex items-center justify-between font-semibold'>
									<p className='text-gray-500'>
										Payment type
									</p>
									<p className='text-gray-900'>Net Banking</p>
								</div>
								<div className='flex items-center justify-between font-semibold'>
									<p className='text-gray-500'>Mobile</p>
									<p className='text-gray-900'>
										+8801811115794
									</p>
								</div>
								<div className='flex items-center justify-between font-semibold'>
									<p className='text-gray-500'>Email</p>
									<p className='text-gray-900'>
										mgrakibbd@gmail.com
									</p>
								</div>
								<div className='flex items-center justify-between font-semibold my-2'>
									<p className='text-gray-500'>Amount Paid</p>
									<p className='text-gray-900 text-[17px] font-bold'>
										500.00
									</p>
								</div>
								<div className='flex items-center justify-between font-semibold'>
									<p className='text-gray-500'>
										Transation Id
									</p>
									<p className='text-gray-900'>{tran_id}</p>
								</div>
							</div>
						</div>

						<div className='flex items-center justify-center gap-2'>
							<div>
								<Link to={`/invoice/${tran_id}`}>
									<Button className='text-white bg-[#219051]'>
										PRINT
									</Button>
								</Link>
							</div>
							<div>
								<Button className='text-white bg-[#219051]'>
									CLOSE
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default PaymentSuccess;