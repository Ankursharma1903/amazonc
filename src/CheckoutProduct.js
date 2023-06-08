import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'



function CheckoutProduct({id,image,title,price,rating,hideButton}) {
const [{basket},dispatch]=useStateValue();
const removeFromBasket=()=>{
    // remove the item from the basket
       dispatch({
        type:'REMOVE_FROM_BASKET',
        id:id,//i have passed the id to remove that item as per its id
        
       })
}

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct_image' src={image} alt="product" />
      
      <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
<div className='checkoutProduct_rating'>

{Array(rating).fill().map((_,i)=>(
  <p>
    ⭐
  </p>
))}
{/* it will create an arrray of 5 or as per rating and then map stars according to it */}

</div>
{!hideButton && (

<button onClick={removeFromBasket}>Delete</button>
// now this button will only render when no hide button prop so we can see its relation from order.js file
)}


      </div>
    </div>
    
  )
}

export default CheckoutProduct
