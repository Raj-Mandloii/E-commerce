import { ListItem } from '@mui/material'
import React from 'react'
import "./Cart.scss"

//===
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      title: 'Long sort graphic tshort',
      isNew: true,
      desc: "Loren ispsum Loren ispsum Loren ispsum Loren ispsum Loren ispsum Loren ispsum Loren ispsum Loren ispsum Loren ispsum Loren ispsum Loren ispsum Loren ispsum ",
    
      oldPrice: 19,
      price: 12
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      title: 'Long sort graphic tshort',
      isNew: true,
      desc: "Loren ispsum Loren ispsum Loren ispsum Loren ispsum Loren ispsum Loren ispsum Loren ispsum Loren ispsum Loren ispsum Loren ispsum Loren ispsum Loren ispsum ",

      oldPrice: 19,
      price: 12
    },
  ]
  return (
    <div className='cart'>
      <h1>Product in you cart</h1>
      {data?.map((el)=>(
        <div className='item' key={el.id}>
          <img src={el.img} alt="Cart-image" />
          <div className="details">
            <h1>{el.title}</h1>
            <p>{el.desc.substring(0,100)}</p>
            <div className="price">1 x ${el.price}</div>
          </div>
          <DeleteOutlinedIcon className='delete'/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  )
}
