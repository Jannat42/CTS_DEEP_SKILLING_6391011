import React from 'react';
import './ComplaintRegister.css';

class ComplaintRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: '',
      complaint: '',
      NumberHolder: Math.floor(1000 + Math.random() * 9000),
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    const msg =
      'Thanks ' +
      this.state.ename +
      '\nYour Complaint was submitted.\nTransaction ID is: ' +
      this.state.NumberHolder;
    alert(msg);
    event.preventDefault();
  }

  render() {
    return (
      <div className="complaint-container">
        <h2 className="complaint-heading">Raise a Complaint</h2>
        <form onSubmit={this.handleSubmit} className="complaint-form">
          <div className="form-group">
            <label>Employee Name:</label>
            <input
              type="text"
              name="ename"
              value={this.state.ename}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Complaint:</label>
            <textarea
              name="complaint"
              value={this.state.complaint}
              onChange={this.handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit Complaint</button>
        </form>
      </div>
    );
  }
}

export default ComplaintRegister;
