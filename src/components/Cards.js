import React from 'react'

function Cards(props) {
  return (
    <div className='card'>
          <img src={props.image} alt='tu'/>
        <p>
        {props.Name}
        </p>
        <button>Know more</button>
    </div>
  )
}

export default Cards