import React from 'react'
import { useState } from 'react'
import data from './mock-data.json';
import '../index.css'

function LeaderboardScreen() {
  const [scores, setScores] = useState(data);
  
  return (
    <div style={{backgroundColor: '#F5C63C', height:'100%', width:'100%', textAlign:'center'}}>
      <h3>Leaderboard</h3>
        <tbody>
          {scores.map((highScore) => (
            <tr>
              <td>{highScore.name}</td>
              <td>{highScore.score}</td>
            </tr>
       ))}
        </tbody>
      </div>
  );
}

export default LeaderboardScreen