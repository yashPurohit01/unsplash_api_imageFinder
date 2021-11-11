
import axios from "axios";
import { DATA_FETCHING, DATA_FETCHING_FAIL, DATA_FETCHING_SUCCESS } from "../constant";

const unsplash_url = "https://api.unsplash.com/search/photos";
const unsplash_key = "AOXKi6Em0utwjDr_5SL2J15iEzZkUMHZ9nhC2KdHg6o";


export const datafetchingAction = (search) => async (dispatch) => {
    let searchData = search ;
    if (!searchData){
        searchData = "Random" 
    }
    else{
        searchData = search
    }
    dispatch({
        type: DATA_FETCHING,
        
    })
/*     try{
         const {data} = await axios.get(unsplash_url, {
            params: {
                query: searchData,
                client_id: unsplash_key,
                per_page:8,
            }
        })
            
        
        dispatch({
            type:DATA_FETCHING_SUCCESS,
            payload: data,
        })
    } */
    await axios.get(unsplash_url, {
        params: {
            query: searchData,
            client_id: unsplash_key,
            per_page: 8,
        }
    }).then(res => {
        let data = res.data.results;
        console.log(data);
         dispatch({
            type: DATA_FETCHING_SUCCESS,
            payload: data
        })
    }).catch(err=>{ 
        
        dispatch({
            type:DATA_FETCHING_FAIL,
            payload:err,
        })
    
       
    })

};