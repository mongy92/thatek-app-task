import { LOADING_QUESTIONS, FETCH_QUESTIONS_SUCCESS } from "../actions/actionTypes";


const INIT_STATE  = {
    loading : false,
    questions : []
}

export default  (state=INIT_STATE, action)=>{
    switch(action.type){
        case LOADING_QUESTIONS:
            return{...state, loading : action.payload};
        case FETCH_QUESTIONS_SUCCESS:
                return{...state, questions : action.payload}
        default:
            return state;
    }
}





