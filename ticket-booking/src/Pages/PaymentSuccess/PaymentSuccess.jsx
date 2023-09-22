import { Button } from "@mui/material";
import Container from "../../Components/Container/Container";
import AOS from "aos";
import "aos/dist/aos.css";

const PaymentSuccess = () => {
	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
		initClassName: "aos-init", // class applied after initialization
		animatedClassName: "aos-animate", // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: "ease", // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
	});

    return (
		<div className='py-5 w-full '>
			<Container>
				<div className=' h-[80vh] flex items-center justify-center'>
					<div className='p-10 w-[50%] text-center shadow-[0_0_10px_#21905150] inline-block mx-auto rounded-md'>
						<div
							
							data-aos='fade-up'
							
							data-aos-delay='50'
							data-aos-duration='1000'
							
							data-aos-mirror='true'
							data-aos-once='false'
							
							className='w-[40px] h-[40px] mx-auto'
						>
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
									<p className='text-gray-900'>
										123458787845
									</p>
								</div>
							</div>
						</div>

						<div className='flex items-center justify-center gap-2'>
							<div>
								<Button className='text-white bg-[#219051]'>
									PRINT
								</Button>
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