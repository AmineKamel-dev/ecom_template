import { useState } from "react";
//TODO: add mode for dynamic display decisions
 function ProductCard({product}){


//TODO: add Styling
return(
    <>
    <div className="Product-Container">
        <div className="Image-Container">
            <img src="assets/react.svg" ></img>
        </div>
        <div className="Description-Container">
            {product.description.map((key,text)=><li>{key}:{text}</li>)}
        </div>
        <div className="price"> {product.price} </div>
    </div>
    </>
)

 }
 export default ProductCard;