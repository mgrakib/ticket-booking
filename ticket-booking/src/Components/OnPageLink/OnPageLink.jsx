import React from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const OnPageLink = ({ pathname }) => {
	const routeName = pathname.split("/").slice(1);
	return (
		<div>
			
			<div className='flex items-center py-1 text-[14px]'>
				{routeName.map((router, i) => {
					if (routeName.length - 1 === i) {
						return (
							<Link
								key={i+1}
								className='relative hover:translate-y-1 duration-300'
							>
								{router}
							</Link>
						);
					}
					return (
						<>
							<Link
								title={routeName[i]}
								to={`/${routeName.slice(0, i + 1).join("/")}`}
								key={i+1}
								className='text-gray-500 flex items-center relative hover:translate-y-1 duration-300'
							>
								{router } <AiOutlineDoubleRight className='mx-[2px]' /> 
							</Link>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default OnPageLink;