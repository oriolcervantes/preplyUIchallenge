import React, { useState } from 'react'
import './Cardswrapper.css'
import Card from '../Card/Card'
import { data } from '../../data/flowers'

const Cardswrapper = () => {

  const [flowers, setFlowers] = useState(data.slice(0, 3))

  return (
    <section className='cardswrapper'>
      <h1 className='cardswraptitle'>Your Herbarium</h1>
      {flowers.sort((a, b) => a.name.localeCompare(b.name)).map(flower => <Card key={flower.id} flower={flower} />)}
      <p>Displaying 3 out of total {data.length} flowers</p>
    </section>
  )
}

export default Cardswrapper