import react from "react";

class UserClass extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Vivek",
        bio: "Default",
      },
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("SET INTERVAL");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    const { name, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="img" />
        <h2>{name}</h2>
        <h2>{bio}</h2>
        <h2>Contact</h2>
      </div>
    );
  }
}

export default UserClass;

// MONTING

// Constructor(dummy)
// Render(dummy)
//     <HTML Dummy>
// Component Did Mount
//      <API Call>
//      <globalThis.setState>

// UPFDATE CYCLE

//     RENDER (API DATA)
//     <HTML (NEW API DATA)>
// Component Did Mount
