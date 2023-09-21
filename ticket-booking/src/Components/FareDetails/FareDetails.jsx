import { Button } from '@mui/material';
import React from 'react';

const FareDetails = ({
	ticketPrice,
	processingFee,
	discount,
	insuranceAmount,
	totalAmount,
    }) => {
	return (
		<div className='border-l-4 border-[#219051] px-4 mt-12 py-2 bg-[#FAFAFA]'>
			<p className='text-xl font-semibold border-b pb-2 border-black text-gray-500'>
				Fare Details
			</p>
			<div className='mt-3 bg-[#ECECEC]'>
				<div className='text-[14px] flex flex-col gap-1'>
					{/* total price  */}
					<div className='py-2 border-b border-b-gray-500'>
						<div className='px-2 flex justify-between items-center'>
							<p>Ticket Price</p>
							<p>{ticketPrice}</p>
						</div>
					</div>
					{/* total price  */}
					<div className='py-2 border-b border-b-gray-500'>
						<div className='px-2 flex justify-between items-center'>
							<p>Processing Fee</p>
							<p>{processingFee}</p>
						</div>
					</div>
					{/* Coupon Code  */}
					<div className='py-2 border-b border-b-gray-500'>
						<div className='px-2 flex justify-between items-center gap-5'>
							<div className='flex-1 '>
								<input
									type='text'
									className='py-[6px] w-full bg-white outline-none duration-150 px-2 focus:shadow-[0px_0px_2px_#219051] rounded'
								/>
							</div>
							<Button className='text-white bg-[#219051]  px-3 py-1'>
								Apply
							</Button>
						</div>
					</div>

					{/* Discount price  */}
					<div className='py-2 border-b border-b-gray-500'>
						<div className='px-2 flex justify-between items-center'>
							<p>Discount</p>
							<p>{discount}</p>
						</div>
					</div>
					{/* Insurance Amount price  */}
					<div className='py-2 border-b border-b-gray-500'>
						<div className='px-2 flex justify-between items-center'>
							<p>Insurance Amount</p>
							<p>{insuranceAmount}</p>
						</div>
					</div>
					{/* Total Amount price  */}
					<div className='py-2 border-b border-b-gray-500'>
						<div className='px-2 flex justify-between items-center'>
							<p>Total Amount</p>
							<p className='font-bold'>{totalAmount}</p>
						</div>
					</div>
				</div>
			</div>

			<div className='p-2 border border-[#219051] mt-3 bg-[#FCF8E3]'>
				<p className='text-red-500 font-bold'>Please note:</p>
				<div className='px-2'>
					<ul className='text-[13px] leading-[16PX] flex flex-col gap-[6px]'>
						<li>
							The Processing Fee and Bank Charges are
							non-refundable.
						</li>
						<li>
							Delivery Charge for areas in Dhaka city has been
							revised to
							<span className='text-red-500 font-bold'>
								Taka. 75
							</span>{" "}
							per delivery.
						</li>
						<li>
							Tickets purchased from Shohoz under any promotional
							campaigns/discounts/offers etc. are However, if the
							ticket is cancelled by the bus operator or Shohoz
							due to any unavoidable circumstance or operational
							issues, the tickets will be eligible for{" "}
							<span className='text-red-500 font-bold'>
								refund excluding the cashback / discount amount.
							</span>{" "}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FareDetails;