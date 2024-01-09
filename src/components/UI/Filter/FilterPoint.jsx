const FilterPoint = ({name, value}) => {
    const normalized_name = name.replace(/ /g, "-")
    return (
        <div className="filter-point">
            <input type="checkbox" name={name} value={value} />
            <label htmlFor="">{value}</label>
        </div>
    );
}

export default FilterPoint;