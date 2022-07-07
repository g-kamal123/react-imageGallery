import React from 'react'
import Cards from './Cards'

function Gallery(props) {
  return (
    <div className='gallery'>
        {
            props.details.map((item) => <Cards image = {item.image}
            Name = {item.Name}
            />)
        }
    </div>
  )
}

export default Gallery