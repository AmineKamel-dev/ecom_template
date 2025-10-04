import { useState } from "react";
import reactLogo from "../assets/react.svg"
 function ProductCard({product}){


//TODO: create variables for custom styling choices
return(
    
    <div i className="bg-fuchsia-200 rounded-xl shadow-md overflow-hidden border-4 border-fuchsia-800 hover:shadow-lg transition p-2 w-64" >
        <div id="imageContainer" className="flex justify-center items-center p-5 h-48 overflow-hidden rounded-lg bg-white">
            <img className="object-contain h-full l" src={reactLogo} />
        </div>
            <div id="Description-Container" className="bg-fuchsia-400 rounded-xl hover:shadow-gray-500 p-2 mb-1">
            <ul className="text-center  text-black ">
                <li className="font-bold">{product.name}</li>
                <li><span className="font-semibold ps-1 m-0.5 ">Stock</span>:{product.stock}</li>
            </ul>
        </div>
        <div id="price" className="text-xl font-bold text-green-600"> {product.price} </div>
    </div>
    
)

 }
 export default ProductCard;