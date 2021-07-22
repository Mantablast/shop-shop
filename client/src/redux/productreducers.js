//add in the products (tasks)
//https://www.youtube.com/watch?v=poQXNp9ItL4
//reference from before
// import {
//     UPDATE_PRODUCTS,
//     ADD_TO_CART,
//     UPDATE_CART_QUANTITY,
//     REMOVE_FROM_CART,
//     ADD_MULTIPLE_TO_CART,
//     UPDATE_CATEGORIES,
//     UPDATE_CURRENT_CATEGORY,
//     CLEAR_CART,
//     TOGGLE_CART
//   } from "./actions";

//Payload is what is keyed ( the key value pairs ) in your actions and passed around between reducers in your redux application.
import {
    UPDATE_PRODUCTS,
    ADD_PRODUCT,
    REMOVE_PRODUCT
} from './productactions'

//add empty arrays (empty cart at beginning)
const initState = {
    products: [],
    categories: []
};

//switch case
//enter switch condition and what action to return with spread operator
//do similar with all cases but products should fetch id
export const reducer = (state = initState, action) => {
switch (action.type) {
    case UPDATE_PRODUCTS:
        return {
            ...state, products: action.payload,
        }
    case ADD_PRODUCT:
        return {
            ...state,
            //array with spread operator
            products: [...state.products, actions.payload]
        }
    case REMOVE_PRODUCT:
        return {
            ...state,
            //filter through products to find the one that matches for removing
            product:state.products.filter((product) => product.id !== action.payload)
        }
        default:
        return state;
  }
}
//return default if case does not match






//reference from lesson
// import { UPDATE_BOOKS, UPDATE_CURRENT_BOOK } from './actions';

// const initialState = {
//   books: [],
//   currentBook: {}
// };

// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_BOOKS:
//       return {
//         ...state,
//         books: [...action.books]
//       };

//     case UPDATE_CURRENT_BOOK:
//       return {
//         ...state,
//         currentBook: { ...action.currentBook }
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;

