import ProductProp from "@components/UI/ProductProp";
const ProductFullInfo = ({ info }) => {
    const names = Object.keys(info);
    return <div style={{display: "flex", 
        flexDirection: "row", 
        flexWrap: "wrap", 
        justifyContent: "space-between", 
        marginTop: "30px"}}>
        {names.map((name) => <ProductProp name={name} value={info[name]} />)}
    </div>
}

export default ProductFullInfo;