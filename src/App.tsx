import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
// predefined fuctions are called hook. Example useEffect


const [data , setData] = useState<number>(0);
const [numberData , setNumberdata] = useState<number>(0);

useEffect( () => {
  addData();
},[numberData]);

const addData = () => {
  const oldData = data;
  const newData = oldData+1;
  setData(newData);
  console.log(newData);
};

const decrementData = () => {
  setNumberdata(numberData -1);
};



  return (
    <>

    <button title="title" onClick ={addData} className={`number ${data}`}>
       add Data </button>
   
   
    <div>Incremented data:{data}</div>
    <br/>

    <button  onClick ={decrementData} className={`decrement ${numberData}`}> decrement </button>
     
      <div>decremented Data:{numberData} </div>
     
    </>
  )
}

export default App
