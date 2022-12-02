import React from 'react'
import { Card } from '../Card/Card'
import "./FeaturedProduct.scss"

export const FeaturedProducts = ({type}) => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      title: 'Long sort graphic tshort',
      isNew: true,
      oldPrice:19,
      price:12
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      title: 'Long sort graphic tshort',
      isNew: true,
      oldPrice:19,
      price:12
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      title: 'Long sort graphic tshort',
      isNew: true,
      oldPrice:19,
      price:12
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      title: 'Long sort graphic tshort',
      isNew: true,
      oldPrice:19,
      price:12
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      title: 'Long sort graphic tshort',
      isNew: true,
      oldPrice:19,
      price:12
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      title: 'Long sort graphic tshort',
      isNew: true,
      oldPrice:19,
      price:12
    },

  ]
  return (
    <div className='featuredProducts'>

      <div className="top">
        <h1>{type}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit praesentium esse illum ducimus aperiam sapiente magni fugiat nam minus quidem quaerat assumenda cumque eos quisquam ipsa, possimus dolore natus nesciunt!</p>
      </div>
      <div className="bottom">
       {data.map(el =>{
        return  <Card item={el} key={el.id}/>
       })}
      </div>
    </div>
  )
}
