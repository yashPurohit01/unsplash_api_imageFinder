import { React } from 'react'
import { useSelector } from 'react-redux';
import styles from './Main.module.css'
import Loader from '../loader/Loader';

function Main({ text,  clicked }) {
    
    const datafetchedResult = useSelector(state => state.datafetchedResult);

    const loadMoreResult = useSelector(state => state.loadMoreResult);

    const {loadedData} = loadMoreResult ;

    let { data, loading } = datafetchedResult;
    
    let newData = [...data ,  ...loadedData]
    
    const images = newData.map((path) => {
        return (
            <div className={styles.searchedImage} key={path.id} >
                <img src={path.urls.thumb} alt={path.alt_description} width="250px" height="180px"></img>
            </div>
        )
    })  
    
    return (
        <div className={styles.main_section}>
            {!loading ?
                <>
                    <div className={styles.text}>
                        <h1>{clicked ? text : ""}</h1>
                    </div>

                    <div className={styles.images}> {images}  </div>
                   
            </> : <Loader />}

        </div>


    )
}

export default Main
