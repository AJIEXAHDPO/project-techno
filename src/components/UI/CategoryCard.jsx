const CategoryCard = ({name, qname, img})=> {
    return <a className="category-card" href={`/catalog/${qname}`}>
        <img className="" src={img} alt=""/>
        <div>{name}</div>
    </a>
}

export default CategoryCard;