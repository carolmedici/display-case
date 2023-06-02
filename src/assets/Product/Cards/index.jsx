import React from "react";


const Cards = ({items}) => {
 return(
    <ul >
            {items.map((item)=>{
                return(
                    <li key={item.id} c>
                        <img
                        src={item.image}
                        alt={item.titule}
                        />
                        <p >{item.titule}</p>
                        <div>
                            <p>{item.author}</p>
                            <span>
                                
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
 );
}

export default Cards