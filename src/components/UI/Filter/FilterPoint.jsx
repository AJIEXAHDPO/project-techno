import { useState, useId } from "react";

const FilterPoint = ({ name, value, checked, count }) => {
    const [checkedValue, setChecked] = useState(checked);
    const id = useId();
    return (
        <div className="filter-point">
            <input type="checkbox" id={id} name={name} value={value} checked={checkedValue} onChange={() => setChecked(!checkedValue)} disabled={count <= 0} />
            <label htmlFor={id}>{`${value === "-" ? "none" : value} (${count})`}</label>
        </div>
    );
}

export default FilterPoint;