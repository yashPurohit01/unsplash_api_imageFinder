
import { DATA_FETCHING, DATA_FETCHING_FAIL, DATA_FETCHING_SUCCESS } from '../constant';

const initialState = {
    data: [],
    loading: false,
    error: ""
    

}

export const datafetchingReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case DATA_FETCHING:
            return {
                ...state,
                loading: true,
            }
        case DATA_FETCHING_SUCCESS:
            return {
                
                loading: false,
                data:  action.payload,
                error:''
            }
        case DATA_FETCHING_FAIL:
            return {
                data:'',
                loading: false,
                error: action.payload,
            }


        default:
            return state

    }
}


