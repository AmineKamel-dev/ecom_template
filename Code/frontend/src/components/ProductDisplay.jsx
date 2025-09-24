import { useState } from "react";
import ProductGrid from "./ProductGrid";

function ProductDisplay({withFilter=false}){
    useState[filter,setFilter]="all";
    useState[products,setProducts]=[];
    //TODO fetch product listing : useEffect
    //TODO filtering logic 

    return(
        <>
        {withFilter && <FilterBar state={filter} onChange={setFilter}/>}
        <ProductGrid list={products}/>
        </>
    )
}

export default ProductDisplay;