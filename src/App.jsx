import React, { useState, useEffect } from "react";

const userDetails = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [user, setUser] = useState([]);

  const userHandler = async () => {
    const response = await fetch(userDetails);
    const newData = await response.json();
    setUser(newData);
  };

  useEffect(() => {
    console.log(userHandler());
  }, []);

  return (
    <div>
      {user.map((item) => {
        return (<div>{item.username}
        {item.item}
        {item.email}</div>)
        
      })}
    </div>
  );
};

export default App;