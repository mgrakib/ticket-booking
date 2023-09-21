import React from 'react';
import { ImSpinner8 } from 'react-icons/im';

const Processing = () => {
    return (
		<div className='w-full h-full bg-[#00000086] absolute left-0 top-0'>
			<div className='w-[50%] h-[50%] bg-white rounded-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-5xl '>
				<ImSpinner8 className='animate-spin' />
			</div>
		</div>
	);
};

export default Processing;