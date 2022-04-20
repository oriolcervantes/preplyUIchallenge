import React from 'react'
import './Infotag.css'
import { ReactComponent as Temp } from '../../assets/temperature.svg'
import { ReactComponent as Humidity } from '../../assets/humidity.svg'

const Infotag = ({ type, flower }) => {
  return (
    <div className={flower.color === 'pink' ? 'tag pinktag' : flower.color === 'blue' ? 'tag bluetag' : 'tag greentag'}>
      {type === 'temperature' ? <Temp /> : <Humidity />}
      {type === 'temperature' ? flower.temperature.toFixed(1) : flower.humidity.toFixed(1)}
    </div>
  )
}

export default Infotag