import React from 'react';
import { useState } from 'react';
import PoligonalShape from '../PoligonalShape/PoligonalShape';
import { FormControlLabel, Radio } from '@mui/material';

const PassengerDetails = () => {
    const [isMale, setIsMale ] = useState(true)
    const [isFemale, setIsFemale] = useState(false)
    

    const handelGenderChange = gender => {
        if (gender === 'male') {
            setIsFemale(false)
            setIsMale(true)
        } else {
            setIsFemale(true);
			setIsMale(false);
        }
    }


    return (
		<div>
			{/* passenger details */}
			<div>
				<PoligonalShape title={"Passenger Info"} />

				<div className='mt-5 flex flex-col gap-3'>
					{/* full name  */}
					<div>
						<label
							htmlFor='fullName'
							className='cusTomeRequired font-semibold'
						>
							Name
						</label>

						<div className='w-[250px] border border-gray-400 bg-gray-100 rounded mt-1'>
							<input
								type='text'
								name=''
								id='fullName'
								className='py-1 px-2 outline-none w-full bg-transparent focus:shadow-[0_0_5px_#219051] duration-200'
								placeholder='Enter Full Nmae'
							/>
						</div>
					</div>

					{/* gender  */}
					<div>
						<label
							htmlFor=''
							className='cusTomeRequired font-semibold'
						>
							Gender
						</label>

						<div className='flex items-center gap-5'>
							{/* male s */}
							<span className='flex gap-1'>
								<FormControlLabel
									checked={isMale}
									onChange={() => handelGenderChange("male")}
									value='male'
									control={
										<Radio className='text-[#219051] text-[14px]' />
									}
									label='M'
								/>
							</span>

							{/* female  */}
							<span className='flex gap-1'>
								
								<FormControlLabel
									checked={isFemale}
									onChange={() =>
										handelGenderChange("female")
									}
									value='female'
									control={
										<Radio className='text-[#219051] text-[14px]' />
									}
									label='F'
								/>
							</span>
						</div>
					</div>
				</div>
			</div>
			{/* Contact Information */}

			<div className='mt-5'>
				<p className='text-xl font-bold pb-2 border-b border-black'>
					Contact Information
				</p>

				<div className='mt-5 flex flex-col gap-6'>
					{/* mobile  */}
					<div>
						<label
							htmlFor='fullName'
							className='cusTomeRequired font-semibold'
						>
							Mobile
						</label>

						<div className='w-[250px] border border-gray-400 bg-gray-100 rounded mt-1'>
							<input
								type='text'
								name=''
								id='fullName'
								className='py-1 px-2 outline-none w-full bg-transparent focus:shadow-[0_0_5px_#219051] duration-200'
								placeholder='Enter Mobile'
							/>
						</div>
					</div>

					{/* mobile  */}
					<div>
						<label
							htmlFor='fullName'
							className=' font-semibold'
						>
							Email
						</label>

						<div className='w-[250px] border border-gray-400 bg-gray-100 rounded mt-1'>
							<input
								type='text'
								name=''
								id='fullName'
								className='py-1 px-2 outline-none w-full bg-transparent focus:shadow-[0_0_5px_#219051] duration-200'
								placeholder='Enter Email'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PassengerDetails;