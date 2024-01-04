import { useState, useEffect } from "react";
import CategoryCard from "@components/UI/CategoryCard";
import { importImages } from "@functions";


const CatalogPage = () => {
    const [categories, setCategories] = useState([]);
    const [imageImports, setImageImports] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/catalog", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json; charset=UTF8"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCategories(data);
                setImageImports(importImages(data));
            });
    }, [])
    return (
        <>
            <h1 className="container">Select a Category</h1>
            <div className="container category-list">{categories.map(category =>
                <CategoryCard
                    name={category.name}
                    qname={category.TableName}
                    img={imageImports[category.img]}
                />
            )}
            </div>
        </>
    );
}

export default CatalogPage;