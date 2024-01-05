const FilterPoint = ({value}) => {
    return (
        <div className="filter-point">
            <input type="checkbox" name="screen" value={value} />
            <label htmlFor="">{value}</label>
        </div>
    );
}

export default FilterPoint;