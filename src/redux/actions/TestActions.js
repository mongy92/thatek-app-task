import { LOADING_QUESTIONS, FETCH_QUESTIONS_SUCCESS } from "./actionTypes";
import { API_URL } from "../../common";



export const fetchTaskQuestions = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOADING_QUESTIONS, payload: true });
            const response = await fetch(API_URL);
            const json = await response.json();
            if(json.response_code === 0){
                dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: json.results })
            }
            dispatch({ type : LOADING_QUESTIONS, payload: false });
        } catch (error) {
            dispatch({ type :  LOADING_QUESTIONS, payload: false });
        }
    }
}