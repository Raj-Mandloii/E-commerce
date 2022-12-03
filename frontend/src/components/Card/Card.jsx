import React from 'react'
import { Link } from 'react-router-dom';
import "./Card.scss"
export const Card = ({ item }) => {
    return (
        <Link className='link' to={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    {item.isNew && <span>New Season</span>}
                    <img src={item.img} alt="main" className='mainImg'/>
                    <img src={item.img2} alt="second" className='secondImg'/>
                </div>
                <h1>{item.title}</h1>
                <div className="prices">
                    <h3>Rs. {item.oldPrice}</h3>
                    <h3>{item.price}</h3>
                </div>
            </div>
        </Link>
    )
}
