const { createStore, combineReducers } = require("redux");

// productReducer
// products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// cart constants
const GET_CARTS = "GET_CARTS";
const ADD_CART = "ADD_CART";

// state
const initialProductState = {
  products: ["Sugar", "Salt"],
  numberOfProducts: 2,
};
const initialCartState = {
  cart: ["Sugar"],
  numberOfProducts: 1,
};

// actions products
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
// actions cart
const getCarts = () => {
  return {
    type: GET_CARTS,
  };
};
const addCart = (product) => {
  return {
    type: ADD_CART,
    payload: product,
  };
};

// product reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};
// cart reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CARTS:
      return {
        ...state,
      };
    case ADD_CART:
      return {
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

// store
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("Egg"));
store.dispatch(getCarts());
store.dispatch(addCart("Pen"));

// cartReducer
