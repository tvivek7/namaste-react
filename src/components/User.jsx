import React from "react";
import { useState } from "react";
const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <div className="user-card">
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <h2>{name}</h2>
      <h2>{location}</h2>
      <h2>Contact</h2>
    </div>
  );
};

export default User;
