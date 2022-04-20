import React, { useState } from 'react'
import './Cardswrapper.css'
import Card from '../Card/Card'
import { data } from '../../data/flowers'

const Cardswrapper = () => {

  const [flowers, setFlowers] = useState(data.slice(0, 3))

  return (
    <section className='cardswrapper'>
      <h1 className='cardswraptitle'>Your Herbarium</h1>
      {flowers.map(flower => <Card key={flower.id} flower={flower} />)}
    </section>
  )
}

export default Cardswrapper