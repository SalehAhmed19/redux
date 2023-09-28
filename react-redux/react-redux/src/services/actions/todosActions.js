import axios from "axios";
import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../constants/TodosConstants";

export const getAllTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });

  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

    dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TODOS_FAILED, payload: error.message });
  }
};

// export const getSuccessTodos = () => async (dispatch) => {

// }

/***
 * normal time: const function = (payload) =>{
 * return {
 * type: "TYPE",
 * payload: payload
 * }
 * }
 *
 *
 * fetching data: const getRequest = () => async (dispatch) => {
 * dispatch({type: "GET_REQUEST"}
 *
 * try{
 * const res = await axios.get("url.com");
 *
 * dispatch({type: "GET_SUCCESS", payload: res.data});
 * }
 * catch(e){
 * dispatch({type: "GET_FAILED", payload: e.message});
 * }
 * };
 */

/**
 * fetching data:
 * step 1: request
 * step 2: try catch method - and fetch data on a variable named res
 * step 3: success
 * step 4: failed on catch method and get the error message
 */
