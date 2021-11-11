import {  LOAD_MORE_SUCCESS } from '../constant';

const loadMoreinitialState = {
    loadedData: [],
    error: ""
}

export const loadMoreReducer = (state = loadMoreinitialState, action) => {
    
    switch (action.type) {
        
        case LOAD_MORE_SUCCESS:
            return {
                ...state ,
                loadedData:  [ ...state.loadedData , ...action.payload]  
                  
            }
        

        default:
            return state

    }
}
