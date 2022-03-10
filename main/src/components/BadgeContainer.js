import React from 'react'

function BadgeContainer({ image, description, status, id }) {
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt={id} />
      </div>
      <div className="details">
        <strong>{description}</strong>
      </div>
    </div>
  )
}

export default BadgeContainer