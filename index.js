// state - count:0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

const ADD_USER = "ADD_USER";
// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const RESET = "RESET";
// const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

// state
const initialState = {
  users: ["John"],
  count: 1,
};

// action
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
// const counterIncrement = () => {
//   return {
//     type: INCREMENT,
//   };
// };
// const counterDecrement = () => {
//   return {
//     type: DECREMENT,
//   };
// };
// const counterReset = () => {
//   return {
//     type: RESET,
//   };
// };
// const counterIncrementByValue = (value) => {
//   return {
//     type: INCREMENT_BY_VALUE,
//     payload: value,
//   };
// };

// reducer
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     case RESET:
//       return {
//         ...state,
//         count: 0,
//       };
//     case INCREMENT_BY_VALUE:
//       return {
//         ...state,
//         count: state.count + action.payload,
//       };
//     default:
//       state;
//   }
// };
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };
    default:
      state;
  }
};

// store
// const store = createStore(counterReducer);
const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
});
// store.dispatch(counterIncrement());
// store.dispatch(counterIncrement());
// store.dispatch(counterDecrement());
// store.dispatch(counterReset());
// store.dispatch(counterIncrementByValue(5));
// store.dispatch(counterIncrementByValue(50));
store.dispatch(addUser("Smith"));
store.dispatch(addUser("Steve"));
