import { useState } from "react";
import PoligonalShape from "../PoligonalShape/PoligonalShape";
import { Button, Checkbox, Radio } from "@mui/material";
import { FaCircleInfo } from "react-icons/fa6";
import { TbInfoTriangleFilled } from "react-icons/tb";
import './PaymentDetails.css'

import bkash from "../../../public/bkash.png";
import nogod from "../../../public/nogod.svg";
import rocket from "../../../public/rocket.svg";
import other from "../../../public/other.svg";
const PaymentDetails = () => {
    const [isSecure, setIsSecure] = useState(true)
    const handelIsSecure = vlaue => {
        setIsSecure(vlaue)
    }
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const [activeTab, setActiveTab] = useState("mobile");

    const mobileBanking = (
        <>
			<div className='mt-5'>
				<p className='text-center text-gray-400'>
					Please Select a Payment Method -
				</p>
				<div className='mt-2'>
					<div className='flex items-center justify-between'>
						{/* bkash  */}
						<div className='py-5 px-5 bg-white w-[25%] flex items-center justify-center gap-1 shadow border  hover:border-[#E3106E] group cursor-pointer h-[65px]'>
							<img
								src={bkash}
								alt=''
							/>
							<p className='group-hover:text-[#E3106E]'>bKash</p>
						</div>
						{/* nogod  */}
						<div className='py-5 px-5 bg-white w-[25%] flex items-center justify-center shadow  relative overflow-hidden h-[65px] border hover:border-[#FF6700] cursor-pointer'>
							<img
								src={nogod}
								alt=''
								className='w-[50%] object-fill'
							/>
						</div>

						{/* rocket  */}
						<div className='py-5 px-5 bg-white w-[25%] flex items-center justify-center shadow border hover:border-[#8C3494] cursor-pointer group h-[65px]'>
							<img
								src={rocket}
								alt=''
							/>
							<p className='group-hover:text-[#8C3494]'>rocket</p>
						</div>
						<div className='py-5 px-5 bg-white w-[25%] flex items-center justify-center shadow h-[65px] border hover:border-[#D0BB86] cursor-pointer group'>
							<img
								src={other}
								alt=''
								className='h-[50%]'
							/>
							<p className='group-hover:text-[#D0BB86]'>
								Other MFS
							</p>
						</div>
					</div>
				</div>

				<div className='mt-5 flex items-center gap-3  justify-center'>
					<div>
						<FaCircleInfo className='text-3xl text-[#219051]' />
					</div>
					<p>
						Processing fee will be added with ticket fare during
						payment, that will vary depending on MFS
					</p>
				</div>
				<div className='mt-10 flex items-center justify-center'>
					<Button className='text-white bg-[#219051] px-10 '>
						Confirm Reservation
					</Button>
				</div>
			</div>
		</>
    );
    
    const cashOnDelivary = (
		<>
			<div className="flex items-center gap-8 justify-center px-10">
				<div>
					<TbInfoTriangleFilled className='text-3xl text-[#219051]' />
				</div>

				<div>
					<p className="text-gray-500">
						Cash on Delivery is not available at this moment. Try
						paying through bKash, Credit / Debit Cards or Internet
						banking.
					</p>
				</div>
			</div>
		</>
    );
    
    const cardOrBanking = (
		<>
			<div className='mt-5 flex items-center gap-8  justify-center px-10'>
				<div>
					<FaCircleInfo className='text-3xl text-[#219051]' />
				</div>
				<p className='text-gray-500 text-[14px]'>
					You would be redirected to a third party payment gateway
					where you can pay with your credit or debit cards. Your
					payment transactions are 100% secure. On successful payment,
					you would get a confirmed ticket.
				</p>
			</div>

			<div className='py-1 px-3 bg-gray-200 text-center mt-5 text-gray-500 font-bold text-[14px]'>
				<p>
					Processing fee will be added with ticket fare during
					payment, that will vary depending on the card
				</p>
			</div>

			<div className="flex items-center justify-center">
				<Button className='text-white bg-[#219051] px-10 mt-8'>
					Proceed to Pay
				</Button>
			</div>
		</>
	);
    return (
		<div>
			<div>
				<PoligonalShape title={"Payment Details"} />
				{/* Insure */}
				<div className='mt-5 border border-gray-400 p-4'>
					<div className='bg-red-50 text-red-400 font-bold px-2 py-3 rounded'>
						Insure your travel by adding ৳ 10 per passenger
					</div>

					<div className='mt-2'>
						{/* secure yes  */}
						<div>
							<Radio
								id='secureYes'
								size='small'
								className='cursor-pointer text-[#219051] p-0'
								checked={isSecure && true}
								onChange={() => handelIsSecure(true)}
							/>
							<label
								htmlFor='secureYes'
								className='cursor-pointer ml-3'
							>
								Yes, secure my trip with insurance. I agree to
								the Terms and Conditions
							</label>
						</div>

						{/* secure no  */}
						<div>
							<Radio
								id='secureNo'
								size='small'
								className='cursor-pointer text-[#219051] p-0'
								checked={!isSecure && true}
								onChange={() => handelIsSecure(false)}
							/>
							<label
								htmlFor='secureNo'
								className='cursor-pointer ml-3'
							>
								No, I don't want insurance
							</label>
						</div>
					</div>
				</div>

				<div className='mt-5'>
					<div className='p-5 border border-gray-400'>
						<p className='text-3xl text-center'>
							Total Amount Payable:{" "}
							<span className='text-[#219051] font-semibold'>
								৳. 690
							</span>
						</p>
					</div>
				</div>
				<div className='mt-5'>
					<div className='p-5 border border-gray-400'>
						<p className=' text-center text-[14px]'>
							By clicking on the, "Confirm Reservation / Proceed
							to Pay" box below, I have read, acknowledged and
							agreed to the Terms of Use, Privacy Policy and
							Cancellation Policy of Shohoz.com
						</p>
					</div>
				</div>
				<div className='mt-5'>
					<div className='p-5 border bg-[#E9F6F1] border-gray-400 flex items-start gap-1'>
						<Checkbox
							id='acceptPolicy'
							{...label}
							className='text-[#219051]'
						/>
						<label
							htmlFor='acceptPolicy'
							className='cursor-pointer'
						>
							I am confirming that I have read, acknowledged and
							agree to the Terms of Use, Privacy Policy and
							Cancellation Policy of e-Ticket
						</label>
					</div>
				</div>
			</div>

			<div className='mt-5'>
				<div className='flex items-center relative'>
					<div
						onClick={() => setActiveTab("mobile")}
						className={`border border-[#219051] border-b-0 px-4 py-2 cursor-pointer  duration-300 ${
							activeTab === "mobile"
								? "active-tab bg-[#ECECEC]"
								: "bg-white"
						} relative `}
					>
						<p className={` w-full h-full`}>Mobile Banking</p>
					</div>
					<div
						onClick={() => setActiveTab("card")}
						className={`border border-[#219051] border-b-0 px-4 py-2 cursor-pointer duration-300  ${
							activeTab === "card"
								? "active-tab bg-[#ECECEC]"
								: "bg-white"
						} relative`}
					>
						<p>Card or Internet Banking</p>
					</div>
					<div
						onClick={() => setActiveTab("cash")}
						className={`border border-[#219051] border-b-0 px-4 py-2 cursor-pointer duration-300  ${
							activeTab === "cash"
								? "active-tab bg-[#ECECEC]"
								: "bg-white"
						} relative`}
					>
						<p>Cash on Delivery</p>
					</div>
				</div>
				<div className='p-5 border border-[#219051]'>
					{activeTab === "mobile"
						? mobileBanking
						: activeTab === "cash"
						? cashOnDelivary
						: cardOrBanking}
				</div>
			</div>
		</div>
	);
};

export default PaymentDetails;