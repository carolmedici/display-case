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
                            <p className="font-bold m-1 p-2 text-center">{item.titule}</p>
                            
                            <button><Modal price={item.price} titule={item.titule} image={item.image} description={item.description}/></button>
                        
                        </li>
                  
                )
            })}
        </ul>
 );
}

export default Cards