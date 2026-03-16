import React from "react";
import { useState, useEffect } from "react";
const User = ({ name, location }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="user-card">
      <h1>{count}</h1>
      <h2>{name}</h2>
      <h2>{location}</h2>
      <h2>Contact</h2>
    </div>
  );
};

export default User;
