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





