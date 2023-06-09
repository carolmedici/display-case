﻿# Display Case


Display case created based on [Jean Meira's](https://github.com/JCDMeira/challenge-FR-005-display-case) React challenge, to create a small showcase for a local store .
 

 ## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View store products.
- View discounted products.
- Click on the modal to see more product information.
- View prices and discounted prices, when they exist.


### Screenshot

![](https://github.com/carolmedici/display-case/blob/main/public/image/print.jpg)
![](https://github.com/carolmedici/display-case/blob/main/public/image/print2.jpg)


### Links

- Solution URL: [https://github.com/carolmedici/display-case](https://github.com/carolmedici/display-case)
- Live Site URL: [https://display-case.vercel.app/](https://display-case.vercel.app/)

## My process

### Built with

- React:
 -- useState
 -- Modal
 -- Functions
 -- Components


### What I learned

I keep learning how to better utilize React.js tools.

Check it out:
```js
const Cards = ({items}) => {
 return(
    <ul className="card-container" >
            {items.map((item)=>{
                return(
                  
                        <li key={item.id} className="card  m-4 rounded-2xl" >
                            <img className="card-image m-auto mt-2"
                            src={item.image}
                            alt={item.titule}
                            />
                            <p className="font-bold m-1 p-2 text-center">{item.titule}</p>
                            
                            <button><Modal discount={item.discount} price={item.price} title={item.title} image={item.image} description={item.description}/></button>
                        
                        </li>
                  
                )
            })}
        </ul>
 );
}

export default Cards
```


### Continued development

The next challenge is make a form page: https://github.com/JCDMeira/challenge-FR-006-registration-of-people

## Author

- LinkedIn - [Carolina Médici](https://www.linkedin.com/in/carolina-medici/)
- Frontend Mentor - [@carolmedici](https://www.frontendmentor.io/profile/carolmedici)
