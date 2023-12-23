import React from "react";

export class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/aasishchunduri");
    const response = await data.json();
    this.setState({
      userInfo: response,
    });
    console.log(response);
  }
  render() {
    const { login, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <h3> Name:{login}</h3>
        <h4>Location: {location}</h4>
        <h4>Contact: 9803820098</h4>
      </div>
    );
  }
}
