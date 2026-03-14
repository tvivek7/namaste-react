import react from "react";

class UserClass extends react.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="user-card">
        <h2>{this.props.name}</h2>
        <h2>Location</h2>
        <h2>Contact</h2>
      </div>
    );
  }
}

export default UserClass;
