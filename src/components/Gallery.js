
import {Cards} from './Cards'
import React, { Component } from 'react'

export class Gallery extends Component {
  render() {
    return (
      <div className='gallery'>
        {
            this.props.details.map((item) => <Cards image = {item.image}
            Name = {item.Name}
            />)
        }
    </div>
    )
  }
}
