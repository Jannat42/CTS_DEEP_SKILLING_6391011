import React from 'react';
import './App.css';

function App() {
  const ItemName = {
    Name: 'DBS',
    Rent: 50000,
    Address: 'Chennai'
  };

  let colors = [];
  if (ItemName.Rent < 60000) {
    colors.push('textRed');
  } else {
    colors.push('textGreen');
  }

  const officeList = [
    { Name: 'UrbanHub', Rent: 65000, Address: 'T. Nagar, Chennai' },
    { Name: 'CoWorks', Rent: 58000, Address: 'OMR, Chennai' },
    { Name: 'SmartHub', Rent: 70000, Address: 'Guindy, Chennai' }
  ];

  return (
    <div className="App">
      <h1>Office Space , at Affordable Range</h1>

      <img
        src="/office.jpeg"
        width="15%"
        height="15%"
        alt="Office Space"
      />

      <h2>Featured Office</h2>
      <h3>Name: {ItemName.Name}</h3>
      <h3 className={colors.join(' ')}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3><hr/>

      <h2>Available Office Spaces</h2>
      {officeList.map((office, index) => {
        const rentClass = office.Rent < 60000 ? 'textRed' : 'textGreen';
        return (
          <div key={index} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
            <h4>Name: {office.Name}</h4>
            <h4 className={rentClass}>Rent: Rs. {office.Rent}</h4>
            <h4>Address: {office.Address}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;
