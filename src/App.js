import logo from './logo.svg';
import './App.css';

 function App() {
  /* variable

  let st='Niraj';
 console.log(st);
 
 if(st==='Niraj')
{
  console.log("hello");
}
else{
  console.log("hi");
}

*/

/* function

const  funct= () => {
const  num = 5;
const  num2 = 4;

const  print = num + num2;
  console.log(print);


}


// object
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

*/

/*
    //  array

const arr1 =[1,2,3,4,5,6]


  // for off loop
for(let item of arr1) 
  {
  console.log(item);
}
*/


/* object with array and for off loop

const people =[
  { name: "niraj", age: 22 },
  { name:"raj", age: 21},
  { name:"rudra", age:20}
];

for (let item of people)
  {
    console.log(item.name);
  }

  */


/* object with array and  for each loop  
  const people =[
    { name: "niraj", age: 22 },
    { name:"raj", age: 21},
    { name:"rudra", age:20}
  ];

  people.forEach((person) => {
    console.log(person.age)
  });

  */


  /* object and for in loop

  const employee = {
    name:"niraj",
    age:30,
    occupation:"engineer",

  };

  for(const key in employee){
    if(employee.hasOwnProperty(key))
      {
      console.log(`${key}: ${employee[key]}`)
     }
  }
 
  // extra information :- for concatenate
  // console.log(employee+(another word)) or console.log(employee(another word))

  console.log()
  */

/* map keyword for returning value

  // array 
  const employees = [
    {name:"Niraj" , age: 22, salary:50 },
    {name:"Rudra" , age: 30, salary:80 },
    {name:"roy" ,   age: 30, salary:100 },
    
  ];

  const mappedEmployees = employees.map((item) =>{
    // console.log("item",item);

    return {
      ...item,
      salary: item.salary + 100,
    };
  
  },[]);

console.log("employees",employees);
console.log("mappedEmployees",mappedEmployees);

*/


/*for filtering data 


  // array
  
const products = [
  {id: 1001, name:"Laptop", price: 1000, category:"Electronics"},
  {id: 1002, name:"shirt", price: 50, category:"clothing"},
  {id: 1003, name:"coffee maker", price: 80, category:"Home Appliance"},
  {id: 1004, name:"Headphones", price: 200, category:"Electronics"},
  {id: 1005, name:"pants", price: 60, category:"clothing"},
  
];

const filteredProducts = products.filter((item) => {
  return item.category ==="clothing";
});

console.log("filteredProducts", filteredProducts);


// find method

const foundProducts = products.find((item)  =>{
  return item.id === 1002;
});


 console.log(foundProducts);

 */


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
