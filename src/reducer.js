export const initialState = {
  basket: [], //in datalayer we want to start with an empty basket
  user: null,
};

//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
//  starting value of amount is 0
//it takes all elements of array and give call back and it takes previous and current value
//  reduce is a function that take the basket and reduce it down
// it show amount and iteerate for all amounts
// it tallies basket and take amount of items and add that amount and return it so its a fancy way of loop
// call it in value of subtotal.js file

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, // ... means spread operator and it refer to all the elements of the array

        basket: [...state.basket, action.item],
        // item prop we have passed all details from product.js
      };

      case "EMPTY_BASKET":                          // for orders page
      return{
        ...state,
        basket:[]            // this will change the basket to its original empty array

      }





    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      // this function will check id for each item in basket if it matches the id of the action
      // it will find the first match

      // i we use filter on id of all things so all similar things with that id is removed
      // to fix that we will used index

      let newBasket = [...state.basket];
      // it will copy the current basket into new basket
      if (index >= 0) {
        // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
        newBasket.splice(index, 1);
        // it will take the current index of that item like if its 3 so chop by 1 and give 2 so it remove that item and give the array of remaining items

        // it will chop the array by 1
        //so it will remove that item
      } else {
        // it will warn that person
        console.warn(
          `cant't remove product (id:${action.id}) as its not in basket !`
        );
      }
      return {
        ...state,
        basket: newBasket,
        // it will return the current state and basket contains new basket
      };
    case "SET_USER":
      return {
        ...state, // so it will return everything inside that state

        user: action.user, // so user is updated with the user that is dispatched
      };
    


    default:
      return state;
  }
};
export default reducer;
