import { useState } from 'react';
import {useDispatch } from 'react-redux'
import Button from './Components/Button/Button';
import Main from './Components/Main/Main';
import './App.css';
import {  datafetchingAction } from './ReduxStore/actions/datafetchingAction';
import LoadMore from './Components/loadmore/LoadMore';


function App() {
  const dispatch = useDispatch() 
  const [search, setsearch] = useState(""); 
  const [text , setText] = useState("Random") ;
  const [clicked, setClicked] = useState(false);
  
  const inputHandler =(e) =>{
  
      setsearch(e.target.value);
  
  }
   const handlekeyPress=(e) =>{
       if(e.key === "Enter"){
         searchHandler();
       }
  }
  const searchHandler = () =>{
      
      dispatch(datafetchingAction({search}));
      if(search){
        setText(search);
      }
    
      setClicked(true);
  }
   
  return (
    <div className="App">
        <div className="app_header"> 
           <input type="text" onKeyPress={handlekeyPress} placeholder="Search for photos" value={search} onChange ={inputHandler} />
           
           <Button logo={"search"} onClick={searchHandler}/> 
        </div>
        
        <Main text={text} clicked={clicked} />
        <LoadMore search={search} clicked={clicked}/>
        
    </div>
  );
}

export default App;
