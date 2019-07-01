import { LOADING_QUESTIONS, FETCH_QUESTIONS_SUCCESS, SELECT_QUESTION_ANSWER } from "./actionTypes";
import { API_URL } from "../../common";
import axios from "axios"

//action for fetch 5 questions from the api
export const fetchTaskQuestions = () => {
    return async (dispatch) => {
        dispatch({ type: LOADING_QUESTIONS, payload: true });
        try {
            const response = await fetch(API_URL);
            const json = await response.json();
            if(json.response_code === 0){
                dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: json.results })
            }
            dispatch({ type : LOADING_QUESTIONS, payload: false });
        } catch (error) {
            console.log(error)
            dispatch({ type :  LOADING_QUESTIONS, payload: false });
        }
    }
}


export const onSelectAnswer = ({answer, index,isCorrect})=>{
    return { type : SELECT_QUESTION_ANSWER , payload : {answer, index,isCorrect} }
}