import React from 'react'
import './Card.css'
import Infotag from '../Infotag/Infotag'

const Card = ({ flower }) => {

  const expandCard = () => {
    const active = document.getElementById(flower.id).classList.contains('active');
    const activeCards = [...document.getElementsByClassName('active')];

    if (active) {
      document.getElementById(flower.id).classList.remove('active');
    } else {
      activeCards.forEach(card => card.classList.remove('active'));
      document.getElementById(flower.id).classList.add('active');
    }
  }

  return (
    <div className='card' id={flower.id}>
      <button onClick={expandCard} className={flower.color === 'pink' ? 'card-up pink' : flower.color === 'blue' ? 'card-up blue' : 'card-up green'}>
        <div className='flowerinfo'>
          <h2 className={flower.color === 'pink' ? 'flowername pink' : flower.color === 'blue' ? 'flowername blue' : 'flowername green'}>{flower.name}</h2>
          <div className='tagswrap'>
            <Infotag type='temperature' flower={flower} />
            <Infotag type='humidity' flower={flower} />
          </div>
        </div>
        <img className='flowerimage' src={require('../../assets/' + flower.name.toLowerCase() + '.png')} alt='Flower' />
      </button>
      <div className={flower.color === 'pink' ? 'card-down pinkexpandable' : flower.color === 'blue' ? 'card-down blueexpandable' : 'card-down greenexpandable'}>
        <p>
          {flower.description}
        </p>
      </div>
    </div>
  )
}

export default Card