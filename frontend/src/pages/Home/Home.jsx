import React from 'react'
import { Slider } from '../../components/Slider/Slider'
import {FeaturedProducts} from "../../components/FeaturedProducts/FeaturedProducts.jsx"
import "./Home.scss";

 const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="feautured"/>
      <FeaturedProducts type="trending"/>
    </div>
  )
}


export default Home