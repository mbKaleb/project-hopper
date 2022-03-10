import React from 'react'
import '../App.css'
import { leaderboardData } from './leaderboardData'

function LeaderboardScreen() {
  // const [scores, setScores] =useState(data);
  
  return (
    <div className="leader-board">
      <h3>Leaderboard</h3>
        <table className="leader">
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          {leaderboardData.map((highScore) => (
            <tr key={highScore.id}>
              <td>{highScore.name}</td>
              <td>{highScore.score}</td>
            </tr>
       ))}
        </table>
      </div>
  );
}

export default LeaderboardScreen