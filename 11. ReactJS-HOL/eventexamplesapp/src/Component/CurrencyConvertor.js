import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: 'Euro',
      conversionRate: {
        Euro: 0.011,
        INR: 88.0
      }
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { amount, currency, conversionRate } = this.state;
    const input = parseFloat(amount);

    if (!isNaN(input)) {
      if (currency === 'Euro') {
        const euroAmount = input * conversionRate.Euro;
        alert(`Converting to Euro Amount is ${euroAmount.toFixed(2)}`);
      } else if (currency === 'INR') {
        const rupeeAmount = input * conversionRate.INR;
        alert(`Converting to INR Amount is ${rupeeAmount.toFixed(2)}`);
      }
    } else {
      alert('Please enter a valid amount');
    }
  };

  render() {
    return (
      <div>
        <h2 style={{ color: 'purple' }}>Currency Convertor!!!</h2>

        <form onSubmit={this.handleSubmit}>
          <label>
            Amount :  
            <input
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </label>
          <br /><br />

          <label>
            Currency : 
            <select
              name="currency"
              value={this.state.currency}
              onChange={this.handleChange}
              style={{ width: '200px', height: '40px', fontSize: '16px' }}
            >
              <option value="Euro">Euro</option>
              <option value="INR">INR</option>
            </select>
          </label>
          <br /><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;

