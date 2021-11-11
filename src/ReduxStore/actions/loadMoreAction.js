import axios from "axios";
import {  LOAD_MORE_SUCCESS } from "../constant";

const unsplash_url = "https://api.unsplash.com/search/photos";
const unsplash_key = "AOXKi6Em0utwjDr_5SL2J15iEzZkUMHZ9nhC2KdHg6o";


export const loadMoreAction = ({search , page }) => async (dispatch) => {
    let searchData = search;
    if (!searchData) {
        searchData = "Random"
    }
    else {
        searchData = search
    }

    
    await axios.get(unsplash_url, {
        params: {
            query: searchData,
            client_id: unsplash_key,
            page:page,
            per_page: 8,
        }
    }).then(res => {
        let loadMoreData = res.data.results;
        
         dispatch({
            type: LOAD_MORE_SUCCESS,
            payload: loadMoreData
        })
    })


    
};