import FilterComponent from "./FilterComponent";

const FiltersSection = () => {
    return (
		<div className='px-3 py-2'>
			<p className='text-[#219051] '>Refine Search</p>
			<FilterComponent title={"Operator"} />
			<FilterComponent title={"Operator"} />
			<FilterComponent title={"Operator"} />
			<FilterComponent title={"Operator"} />
			<FilterComponent title={"Operator"} />
		</div>
	);
};

export default FiltersSection;