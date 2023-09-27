const { createStore } = require("redux");

// defining the constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// state
const initialCounterState = {
  count: 0,
};

// action - Object - type (must) and payload (for data passing)
// Increment the counter
const incrementCounter = () => {
  // action creator function
  return {
    type: INCREMENT,
  };
};

// Decrement the counter
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// create reducer function
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state, // get all properties
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state, // get all proper
        count: state.count - 1,
      };

    default:
      state;
  }
};

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch actions
store.dispatch(incrementCounter());

/****
 * 1. state
 * 2. dispatch action
 * 3. reducer - work based on action type
 * 4. store - getState(), dispatch(), subscribe()
 */
