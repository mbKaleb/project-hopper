import React from 'react'
import Form from './Form'

function LeaderboardScreen({scores, setScores}) {
  function handleAddScore(newScore) {
    setScores([...scores, newScore]);
  }

  return (
    <div className="leader-board">
      <h3>Leaderboard</h3>
      <table className="leader">
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        {scores.map((highScore) => (
          <tr key={highScore.id}>
            <td>{highScore.name}</td>
            <td>{highScore.score}</td>
          </tr>
      ))}
      </table>
      <Form onAddScore={handleAddScore}/>
      <div className="footer">Project-Hopper designed by: Jack, Kaleb, Krisitna | //Flatiron School</div>
    </div>
  );
}

export default LeaderboardScreen