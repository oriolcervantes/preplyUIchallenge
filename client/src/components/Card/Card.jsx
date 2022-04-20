import React from 'react'
import './Card.css'
import Infotag from '../Infotag/Infotag'

const Card = ({ flower }) => {
  return (
    <div className='card'>
      <div className={flower.color === 'pink' ? 'card-up pink' : flower.color === 'blue' ? 'card-up blue' : 'card-up green'}>
        <div className='flowerinfo'>
          <h2 className={flower.color === 'pink' ? 'flowername pink' : flower.color === 'blue' ? 'flowername blue' : 'flowername green'}>{flower.name}</h2>
          <div className='tagswrap'>
            <Infotag type='temperature' flower={flower} />
            <Infotag type='humidity' flower={flower} />
          </div>
        </div>
        <img className='flowerimage' src={require('../../assets/' + flower.name.toLowerCase() + '.png')} alt='Flower' />
      </div>
      <div className='card-down'>Card</div>
    </div>
  )
}

export default Card