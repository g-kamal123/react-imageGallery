import {Gallery} from "./components/Gallery";
import React, { Component } from 'react'

let gallery = [
  {
    image:'https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA25325.width-1024.jpg',
    Name:'Jezero Crater'
  },
  {
    image:'https://media3.giphy.com/media/60ryQeMEiWqKWnpCKI/giphy.gif?cid=790b761118a34480df43af8b1b0cc5f953f942b8a0fcf498&rid=giphy.gif&ct=g',
    Name:'Preservance Rover'
  },
  {
    image:'https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/vertical-graphics-04.jpg?itok=4JB7GIG_',
    Name:'Preservance Rover'
  },
  {
    image:'https://www.nasa.gov/sites/default/files/thumbnails/image/curiosity_selfie.jpg',
    Name:'Curiosity selfie'
  },
  {
    image:'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia23346-16.jpg',
    Name:'Curiosity after 7 years'
  },
  {
    image:'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia22326-16.jpg',
    Name:'Drill by Curiosity'
  },
  {
    image:'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia22213-nasa.jpg',
    Name:'Haroldswick'
  },
  {
    image:'https://media0.giphy.com/media/10cw7bO7hx08py/200w.gif?cid=82a1493b1e28y5z9iay9h0e1zt0q1yskicujthjcwtx3t47y&rid=200w.gif&ct=g',
    Name:'Mars Rover candy'
  },
  {
    image:'http://www.nasa.gov/sites/default/files/styles/1x1_cardfeed/public/thumbnails/image/pia19801-main-1041.gif?itok=eWtoRy0I',
    Name:'Drill by Curiosity'
  },
  {
    image:'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/140155main_image_feature_481_ys_full.jpg',
    Name:'Morning at mars'
  },
  {
    image:'https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA17588.width-1024.jpg',
    Name:'Murray Ridge'
  }
];

export class App extends Component {
  render() {
    return (
      <div className="App">
      <Gallery details={gallery} />
    </div>
    )
  }
}

