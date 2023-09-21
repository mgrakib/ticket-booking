

const PoligonalShape = ({title}) => {
    return (
		<div className=' flex border-b-4 border-[#219051] p-0'>
			<div
				style={{
					clipPath: "polygon(0 0, 69% 0, 100% 100%, 0% 100%)",
				}}
				className='bg-[#219051]  py-2 pl-3 pr-20 text-white text-xl relative top-1'
			>
				{title}
			</div>
		</div>
	);
};

export default PoligonalShape;