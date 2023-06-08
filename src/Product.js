import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider'
function Product({id,title,image,price,rating}) {
  const [{basket},dispatch]=useStateValue();
// state of object , dispatch is how we manipulate the data
// we have replaced state with {basket} as we are not using state here for now


// console.log('this is the basket >>',basket);

  const addToBasket=()=>{
   // dispatch the item into datalayer
       dispatch({
        // it will shoot the data inside the datalayer
        type:'ADD_TO_BASKET',
        // SO THIS PROP of type and item IS PASSED IN THE SWITCH CASE OF THE REDUCER 
        item: {
          id:id, // this will take the id passed in the function product
          title:title,
          image:image,
          price:price,
          rating:rating,

        }
       })
  }


  return (
    <div className='product'>
      <div className="product_info">
          <p>{title}</p>
          <p className='product_price'>
              <small>&#8377;</small>
              <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {Array(rating).fill().map(( _, i) => (
              <p>⭐</p>

            ))}
              
          </div>
      </div>
      <img src={image} alt="product" />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  )
}

export default Product
