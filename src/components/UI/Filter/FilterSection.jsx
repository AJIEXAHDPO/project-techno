const FilterSection = ({title, children}) => {
    return (
        <div className="filter-section">
            <h3 className="filter-point">{title}</h3>
            {children}
        </div>
    );
}

export default FilterSection;