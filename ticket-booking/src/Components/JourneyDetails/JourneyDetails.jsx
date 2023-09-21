import moment from 'moment';


const JourneyDetails = ({ targetBus, selectedSeats }) => {
	
	return (
		<div>
			<div className='border-l-4 border-[#219051] px-4 mt-12 py-2 bg-[#FAFAFA]'>
				<p className='text-xl font-semibold border-b pb-2 border-black text-gray-500'>
					Journey Details
				</p>
				<div className='pt-2'>
					<div className='text-[14px] flex flex-col gap-1'>
						<p className='text-2xl font-bold text-[#219051]'>
							{targetBus?.startingPoint} -{" "}
							{targetBus?.endingPoint}
						</p>
						<p>{targetBus?.busOperatorName}</p>
						<p>
							{moment(targetBus?.journeyDate).format(
								"ddd, MMM D, YYYY"
							)}
							,{" "}
							{moment(targetBus?.startingTime, "HH:mm").format(
								"h:mm A"
							)}
						</p>
						<p className='flex items-center gap-2'>
							Seat No(s):{" "}
							<span className='text-[#219051] font-bold'>
								{selectedSeats?.map((seat, i) => {
									if (
										selectedSeats.indexOf(seat) ===
										selectedSeats.length - 1
									) {
										return <span key={i}>{seat}</span>;
									} else {
										return <span key={i}>{seat} ,</span>;
									}
								})}
							</span>
						</p>
						{/* TODO: Dynamic boarding  */}
						<p>Boarding at Kallyanpur BRTC Counter , 07:30 AM</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JourneyDetails;