
import React, {useState,useEffect} from "react";

function App(){
  const [data, setData]=useState([{}])

  useEffect(() => {
    fetch("http://localhost:5001/members")
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  return (
    <div>
      {(typeof data.members==='undefined')?(
        <p>Loading...</p>
      ):(
        data.members.map((member,i)=>(
          <p key={i}>{member}</p>
        ))
      )}

    </div>
  )
}

export default App
