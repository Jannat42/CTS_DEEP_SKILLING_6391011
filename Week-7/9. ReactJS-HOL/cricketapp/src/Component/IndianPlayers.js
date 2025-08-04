import React from 'react';

const T20players = ["Sachin1", "Dhoni2", "Virat3"];
const RanjiTrophyPlayers = ["Rohit4", "Yuvraj5", "Raina6"];

const allPlayers = [...T20players, ...RanjiTrophyPlayers];

const [first, second, third, fourth, fifth, sixth] = allPlayers;

const oddPlayers = [first, third, fifth];   
const evenPlayers = [second, fourth, sixth]; 

const IndianPlayers = () => {
  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        <li>First : {oddPlayers[0]}</li>
        <li>Third : {oddPlayers[1]}</li>
        <li>Fifth : {oddPlayers[2]}</li>
      </ul>
      <hr/>

      <h2>Even Players</h2>
      <ul>
        <li>Second : {evenPlayers[0]}</li>
        <li>Fourth : {evenPlayers[1]}</li>
        <li>Sixth : {evenPlayers[2]}</li>
      </ul>
      <hr/>

      <h3>List of Indian Players Merged:</h3>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
