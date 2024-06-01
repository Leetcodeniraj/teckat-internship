import logo from './logo.svg';
import './App.css';

 function App() {
//   let st='Niraj';
//  console.log(st);
 
//  if(st==='Niraj')
// {
//   console.log("hello");
// }
// else{
//   console.log("hi");
// }const  funct= () => {
const  num = 5;
const  num2 = 4;

const  print = num + num2;
  console.log(print);

  
}

const student = {
  name : "niraj",
  age: 5,
  address:  "ranchi", 

};

let student2={
  name:"niraj",
  age:6,
  address:"jamshedpur",

};


if(student.name===student2.name){

funct();

}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
      </header>
    </div>
  );
}

export default App;
