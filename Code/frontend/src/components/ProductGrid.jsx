import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductGrid({list}){
    

    const cards=()=>{
       list.map((item)=><ProductCard key={item.id} product={item}/>)
    }
    return(
        <>
        <div className="external-container">
            <div className="grid-container">
                {cards}
            </div>
        </div>
        </>
    )
}
export default ProductGrid;