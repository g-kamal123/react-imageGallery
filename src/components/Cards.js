import React, { Component } from 'react'

export class Cards extends Component {
  render() {
    return (
      <div className='card'>
          <img src={this.props.image} alt='tu'/>
        <p>
        {this.props.Name}
        </p>
        <button>Know more</button>
    </div>
    )
  }
}
