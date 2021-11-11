import {React ,useState} from 'react'
import Button from '../Button/Button'
import styles from './LoadMore.module.css'
import {useDispatch } from 'react-redux'

import { loadMoreAction } from '../../ReduxStore/actions/loadMoreAction';

function LoadMore({clicked , search}) {
    const [page , setPage] = useState(2);
    
    const dispatch = useDispatch();

    
    function loadmore() {
        setPage(prev => prev+1) ;
        dispatch(loadMoreAction({search , page}));
        
    }
    
    return (
        <>
         { clicked?
            <div>
                <div className={styles.footer_section}>
                    <Button className={styles.Button} onClick={loadmore} text={"load more"} />
                </div> 
 
            </div>
            :""
         }
        </>
    )
}

export default LoadMore
