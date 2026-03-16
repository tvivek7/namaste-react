import User from "../components/User";
import UserClass from "../components/UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Class</h1>
        <User />
        {/* <UserClass name={"First"} location={"Noida"} /> */}
      </div>
    );
  }
}

export default About;
