import React from "react";
import "./Getuser.css";

class Getuser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      loading: true,
    };
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    console.log(data.results[0]);
  }

  render() {
    const { person, loading } = this.state;

    if (loading) {
      return <div className="loading">Loading...</div>;
    }

    return (
      <div className="user-card">
        <h2>User Info</h2>
        <p>
          <strong>Title:</strong> {person.name.title}
        </p>
        <p>
          <strong>First Name:</strong> {person.name.first}
        </p>
        <img src={person.picture.large} alt="user" className="user-image" />
      </div>
    );
  }
}

export default Getuser;
