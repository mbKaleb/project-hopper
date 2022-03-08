import React from 'react'
import BadgeContainer from './BadgeContainer'

function BadgeScreen({ badges }) {
    const badgesItem = badges.map((badge) => (
       <BadgeContainer 
        key={badge.id}
        id={badge.id}
        image={badge.image}
        description={badge.description}
        status={badge.status}
       /> 
    ) )
  return (
    <ul className="cards">
        {badgesItem}
    </ul>
  )
}

export default BadgeScreen