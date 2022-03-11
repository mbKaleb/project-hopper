import React, { useState } from 'react'

function Form({ onAddScore }) {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')

  function handleSubmit(e) {
      e.preventDefault();
      const newScore = {
          name: name,
          score: score
      };
      fetch("http://localhost:3000/leaderboard", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
        },
        body: JSON.stringify(newScore),
      })
      .then((r) => r.json())
      .then((newScore) => onAddScore(newScore));
  }
  return (
    <form className="NewScore" onSubmit={handleSubmit}>
      <label>
        Name:{' '}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Score:{' '}
        <input
          type="number"
          score="score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
      </label>
      <button type="submit">Add to Leaderboard</button>
    </form>
  );
}

export default Form