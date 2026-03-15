import User from "../components/User";
import UserClass from "../components/UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Cons");
  }

  componentDidMount() {
    console.log(" Parent componentDidMount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About Class</h1>
        <UserClass name={"First"} location={"Noida"} />
        <UserClass name={"Second"} location={"Noida"} />
        <UserClass name={"Third"} location={"Noida"} />
      </div>
    );
  }
}

export default About;
