import React from 'react';
import ListofPlayers from './Component/ListofPlayers';
import IndianPlayers from './Component/IndianPlayers';

function App() {
  const flag = true;
  //const flag = false; --> Change to false to test the other component

  return (
    <div className="App">
      <h1><center>Welcome to Cricket App</center></h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
