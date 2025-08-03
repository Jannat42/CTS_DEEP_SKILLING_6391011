import React from 'react';

const players = [
  { name: "Virat", score: 95 },
  { name: "Rohit", score: 85 },
  { name: "Dhoni", score: 45 },
  { name: "Jadeja", score: 70 },
  { name: "Ashwin", score: 60 },
  { name: "Gill", score: 90 },
  { name: "Pant", score: 65 },
  { name: "Hardik", score: 50 },
  { name: "Kohli", score: 80 },
  { name: "Rahul", score: 55 },
  { name: "Bumrah", score: 75 },
];

const ListofPlayers = () => {
  const lowScorers = players.filter(p => p.score <= 70); 

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>Mr. {p.name}: {p.score}</li>
        ))}
      </ul>

      <hr/>

      <h2>List of Players having Scores Less than 70</h2>
      <ul>
        {lowScorers.map((p, index) => (
          <li key={index}>Mr. {p.name}: {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
