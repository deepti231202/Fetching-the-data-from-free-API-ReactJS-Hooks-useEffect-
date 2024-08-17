// import ReactDOM from "react-dom";
// // import ReactDOM from "react-dom";
// import './index.css';
// // import App from './App';
// // import './App.css';
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // class Website extends React.Component{
// //   render(){
// //     return(
// //       <div class = 'container'>
// //       <h1>Hello</h1>
// //       </div>
// //     )
// //     }
// //   }

// //   ReactDOM.render(<Website/>,document.getElementById("root"));

// import React, { useState } from 'react';

// function Counter() {
// const [count, setCount] = useState(50);
// const increment = () => {
//     setCount(count + 1);
//   };
// const decrement = () => {
//     setCount(count - 1);
//   };

// //   return (
// //     <div>
// //       <button onClick={decrement}>-</button>
// //       <h1>{count}</h1>
// //       <button onClick={increment}>+</button>
// //     </div>
// //   );
// // }

// return (
//   <div style={{ display: 'flex', alignItems: 'center', }}>
//     <button  onClick={decrement} style={{ marginRight: '10px' }}>-</button>
//     <h1 style={{ margin: '0 10px' }}> {count}</h1>
//     <button onClick={increment} style={{ marginLeft: '10px' }}>+</button>
//   </div>
// );
// }
// export default Counter;
// ReactDOM.render(<Counter />,document.getElementById("root"));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import ReactDOM from 'react-dom';
// import React ,{useState,useEffect} from 'react';
// function Examplerender() {
//   const[count , setCount]=useState(-100);
//   useEffect(() => {
//     setTimeout(()=> {
//       setCount(count => count+1)},2000)
//     });
//   return(
//     <h1>Website counting details {count} times</h1>
//   )
// }
// ReactDOM.render(<Examplerender />,document.getElementById('root'));

 import ReactDOM from "react-dom";
 import React,{useState,useEffect} from 'react';
 function Userdemo() {
  const[users,setUsers]=useState([]);
  const[loading,setLoading]=useState(true);
  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    setUsers(data);
    setLoading(false);
  })
  .catch(error => {
    console.error("is it is not loading,it is error",error);
    setLoading(false);
  });

  },[]);
  if(loading) {
    return<p>loading</p>;
  }
  return(
    <div>
      <h1>List out the users in API</h1>
      <ul>
        {users.map(users => (
          <li key={users.id}>{users.name}</li>
        ))}
      </ul>
    </div>
  )
 }
 ReactDOM.render(<Userdemo />,document.getElementById("root"));


// import ReactDOM from "react-dom";
// import React, { useState, useEffect } from 'react';

// function Userdemo() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(data => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("An error occurred while loading:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>List of Users from API</h1>
//       <ul>
//         {users.map(todo => (
//           <li key={todo.id}>{todo.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(<Userdemo />, document.getElementById("root"));
