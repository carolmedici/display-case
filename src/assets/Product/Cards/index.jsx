import React from "react";
import "./Cards.css"
import Modal from "../Modal";


const Cards = ({items}) => {
 return(
    <ul className="flex flex-wrap" >
            {items.map((item)=>{
                return(
                  
                        <li key={item.id} className="card m-4 rounded-2xl" >
                            <img className="card-image m-auto mt-2"
                            src={item.image}
                            alt={item.titule}
                            />
                            <p className="font-bold m-1 p-2">{item.titule}</p>
                            <p className="p-4">{item.description}</p>
                            <button><Modal/></button>
                        
                        </li>
                  
                )
            })}
        </ul>
 );
}

export default Cards