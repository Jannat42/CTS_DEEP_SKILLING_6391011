import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      errors: {
        fullName: '',
        email: '',
        password: ''
      }
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName':
        errors.fullName =
          value.length < 5 ? 'Full Name must be at least 5 characters long!' : '';
        break;

      case 'email':
        const validEmailRegex = RegExp(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        );
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
        break;

      case 'password':
        errors.password =
          value.length < 8 ? 'Password must be at least 8 characters long!' : '';
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  validateForm = (errors) => {
    return Object.values(errors).every(val => val === '');
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      alert('Valid Form');
    } else {
      const { fullName, email, password } = this.state.errors;
      if (fullName !== '') alert(fullName);
      if (email !== '') alert(email);
      if (password !== '') alert(password);
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="form-container">
        <h2>Register Form</h2>
        <form onSubmit={this.handleSubmit} noValidate>
          <div>
            <label>Name:</label>
            <input type="text" name="fullName" onChange={this.handleChange} />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>

          <div>
            <label>Email:</label>
            <input type="email" name="email" onChange={this.handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div>
            <label>Password:</label>
            <input type="password" name="password" onChange={this.handleChange} />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
