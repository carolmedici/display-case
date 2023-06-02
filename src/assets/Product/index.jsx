import React from "react";
import Cards from "./Cards";
import product from "./Product.json"
import { useState } from "react";


const Product = () => {
    const [items] = useState(product);
    
            
    return ( 
        <section >
       
      
        <Cards items={items} />
       
        </section>
     );
    }
 
export default Product;