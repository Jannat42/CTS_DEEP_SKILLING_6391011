import React, { useState } from 'react';
import './App.css';

function LoginButton(props)
{
  return(
    <button onClick = {props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props)
{
  return(
    <button onClick = {props.onClick}>
      Logout
    </button>
  );
}

function Greeting(props)
{
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn)
  {
    return <UserGreeting/>;
  }
  return <GuestGreeting/>;
}

function UserGreeting() {
  return (
    <div>
      <h2>Welcome Back, User!</h2>
      <p>You can now book your tickets:</p>
      <button>Book Chennai → Delhi</button>
      <br/><br/>
      <button>Book Mumbai → Bangalore</button>
      <br/><br/>
    </div>
  );
}

function GuestGreeting() {
  return (
    <div>
      <h2>Welcome Guest</h2>
      <p>Browse available flights:</p>
      <ul>
        <p>Flight: Chennai → Delhi at 10:30 AM</p>
        <p>Flight: Mumbai → Bangalore at 1:45 PM</p>
      </ul>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div className="App">
      <h1>Flight Ticket Booking App</h1>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default App;

