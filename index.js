// defining the constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state
const initialCounterState = {
  count: 0,
};
const initialUserState = {
  users: [{ name: "John Smith" }],
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

// Add User
const addUSer = () => {
  return {
    type: ADD_USER,
    payload: { name: "Steven Hocking" },
  };
};

/****
 * 1. state
 * 2. dispatch action
 * 3. reducer - work based on action type
 * 4. store
 */
