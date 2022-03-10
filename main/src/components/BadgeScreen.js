import React from 'react'
import BadgeContainer from './BadgeContainer'

function BadgeScreen({ badges }) {
    const badgesItem = badges.map((badge) => (
       <div>
         <BadgeContainer 
          key={badge.id}
          id={badge.id}
          image={badge.image}
          description={badge.description}
          status={badge.status}
        /> 
       </div>
    ) )
  return (
    <ul className="cards">
        {badgesItem}
    </ul>
  )
}

export default BadgeScreen