import react from "react";

class UserClass extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    console.log("Child Cons");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("Child Render");

    return (
      <div className="user-card">
        <h1>Counr : {this.state.count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Increment
        </button>
        <h2>{this.props.name}</h2>
        <h2>{this.props.location}</h2>
        <h2>Contact</h2>
      </div>
    );
  }
}

export default UserClass;
