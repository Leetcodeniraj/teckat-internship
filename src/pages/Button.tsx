import React, { useEffect, useState } from 'react'




const Button = () => {
  
    const [data , setData] = useState<number>(0);
     
    useEffect( () => {
        
        addData();
      },[]);
    
      const addData = () => {
        const oldData = data;
        const newData = oldData+1;
        setData(newData);
        console.log(newData);
      };
      
     


return (
    <>
<button title="student">
    
</button>


    <button title="title" onClick ={addData} className={`number ${data}`}>
       add Data </button>
   
   
    <div>Incremented data:{data}</div>
    <br/>

   
</>
)
}

export default Button
