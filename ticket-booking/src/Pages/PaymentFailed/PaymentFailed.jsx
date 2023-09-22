/** @format */

import { Button } from "@mui/material";
import Container from "../../Components/Container/Container";
import { Link } from "react-router-dom";

const PaymentFailed = () => {
	const navitation = useNavigate()
	setTimeout(() => {
		navitation('/');
	}, 5000);
	return (
		<>
			<div className='py-5 w-full '>
				<Container>
					<div className=' min-h-[80vh] flex items-center justify-center'>
						<div className='p-10 min-w-[50%] text-center shadow-[0_0_10px_#21905150] inline-block mx-auto rounded-md'>
							<div className='w-[150px] h-[150px] mx-auto'>
								<img
									src='https://i.ibb.co/xGxJWyw/image.png'
									alt=''
								/>
							</div>
							<p className='text-[#DD5044] text-2xl mt-5'>
								Failed
							</p>

							<div className='my-14 flex flex-col gap-2'>
								<p className='text-xl text-[#100C74]'>
									Unfortunately payment was rejected
								</p>
								<p className='text-[#46455B]'>
									Page while be automatically redirected to
									the miin page or click button below
								</p>
							</div>

							<div className='flex items-center justify-center gap-2'>
								<div>
									<Link to={"/"}>
										<Button className='text-white bg-[#7C76FE]'>
											DONE
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>

			
		</>
	);
};

export default PaymentFailed;
