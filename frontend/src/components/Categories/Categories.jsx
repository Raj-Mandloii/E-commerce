import React from 'react'
import { Link } from 'react-router-dom';
import "./Categories.scss";

export const Categories = () => {
    return (
        <div className='categories'>

            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                    <button>
                        <Link className='link' to="/product/1">
                            Sale
                        </Link>
                    </button>

                </div>
                <div className="row">
                <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                    <button>
                        <Link className='link' to="/product/1">
                            Women
                        </Link>
                    </button>
                </div>
            </div>

            <div className="col">
                <div className="row">
                <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                    <button>
                        <Link className='link' to="/product/1">
                            New Season
                        </Link>
                    </button>
                </div>
            </div>


            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                        <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                    <button>
                        <Link className='link' to="/product/1">
                            Men
                        </Link>
                    </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                        <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                    <button>
                        <Link className='link' to="/product/1">
                            Accessiries
                        </Link>
                    </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                    <button>
                        <Link className='link' to="/product/1">
                            Shoes
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
