import { Checkbox, FormControlLabel } from "@mui/material";

const FilterComponent = ({title}) => {
  


    return (
		<div className='mt-5 pt-5 border-t border-gray-700 '>
			<p className='text-[#079D49] text-lg font-bold'>{title}</p>

			<div className='mt-5'>
				<FormControlLabel
					control={
						<Checkbox
							size='small'
							color='success'
						/>
					}
					label='Hanif Enterprise'
				/>
				<FormControlLabel
					control={
						<Checkbox
							size='small'
							color='success'
						/>
					}
					label='Hanif Enterprise'
				/>
			</div>
		</div>
	);
};

export default FilterComponent;