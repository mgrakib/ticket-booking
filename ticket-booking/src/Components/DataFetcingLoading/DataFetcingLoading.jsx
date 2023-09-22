import React from 'react';

const DataFetcingLoading = () => {
    return (
		<div>
			<div className='h-full'>
				<div className='w-full min-h-[300px]  flex flex-col py-5  gap-5'>
					<div className='w-full  flex flex-col gap-1 '>
						<div className='h-[20px] w-[100%] bg-slate-200 animate-pulse '></div>
						<div className='h-[20px] w-[100%] bg-slate-200 animate-pulse '></div>
						<div className='h-[20px] w-[100%] bg-slate-200 animate-pulse '></div>
					</div>
					<div className='w-full  flex flex-col gap-1 '>
						<div className='h-[20px] w-[100%] bg-slate-200 animate-pulse '></div>
						<div className='h-[20px] w-[100%] bg-slate-200 animate-pulse '></div>
						<div className='h-[20px] w-[100%] bg-slate-200 animate-pulse '></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DataFetcingLoading;