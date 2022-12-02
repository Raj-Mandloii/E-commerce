import React from 'react'
import { Slider } from '../../components/Slider/Slider'
import {FeaturedProducts} from "../../components/FeaturedProducts/FeaturedProducts.jsx"
import "./Home.scss";

 const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts/>
    </div>``
  )
}


export default Home