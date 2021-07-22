//askbcs said update multiple, clear and toggle are not necessary
//shouldn't have to import because of state provider
//send to reducer with required payload
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const updateproducts = (products) => ({
    type: UPDATE_PRODUCTS,
    payload: products
});

export const addproduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product
  });
  
  export const removeproduct = (productId) => ({
      type: REMOVE_PRODUCT,
      payload: productId
  });
  
