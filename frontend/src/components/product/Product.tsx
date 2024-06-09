//@ts-nocheck
import React, { useContext, useEffect, useState } from 'react'
import './product.css'
import { MdOutlineShield } from "react-icons/md";
import img1 from '../../assets/images/thai-nguyen-7uEVvoPzwG4-unsplash.jpg'
import img2 from '../../assets/images/thai-nguyen-fw_KhcwHmlY-unsplash.jpg'
import img3 from '../../assets/images/thai-nguyen-j2B7PCZNtvw-unsplash.jpg'
import img4 from '../../assets/images/victoria-shes-UC0HZdUitWY-unsplash.jpg'
import Collect from '../collection/Collect';
import { AiFillExclamationCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { GlobalContext } from '../../App';
import { useParams } from 'react-router-dom';

export function getCookie(name:any) {
    const value = `; ${document.cookie}`;
    const parts:any = value.split(`; ${name}=`);
    if (parts) {
        if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
    }
  }

const Product = () => {
    const { id } = useParams();
    
    const initial_price = 599.99
    const [state, setState] = useState([])
    const [heart, setHeart] = useState(false)
    const globalState = useContext(GlobalContext)
    const setCart = globalState!.setCart

    const [productData, setProductData] = useState({})
    
    const data = {
            "img": state[0],
            "name": productData.name,
            "price": productData.price,
            "category": productData.category
          }

    useEffect(()=> {
        

        let url = "http://localhost:8000/api/view-product/"
        const messageData = {"id": id}
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(messageData)
          };
        
        async function fetchData () {
            fetch(url, options) 
            .then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json(); // Parse the JSON response
              })
              .then(data => {
                setProductData(data)
                setState(data.image)
              })
              .catch(error => {
                console.error('Error:', error); // Handle any errors that occur
              });
        }
        fetchData()
    }, [])

    console.log("Happy Pig", productData, state)

  return (
    <div className="product">
        <div className="container">
            <div className="product-container">
                <div className="product-card">
                    <div className="product-left">
                        <div className="dir-1">
                            <div>
                            <a href="#">Home</a> / <a href="#">{productData.category}</a>
                            </div>
                            <p className='p-heart' onClick={()=> {
                                setHeart(!heart)
                            }}
                            >{heart ? <FaHeart/>:<FaRegHeart/>}</p>
                        </div>
                        <h2 className='p-title'>{productData.name}</h2>
                        <div className="p-details">
                            <div className="p-price-1">$ {productData.price} </div>
                            <p className="p-price-2">$ {productData.price_old}</p>
                        </div>
                        <div className="p-left-1"><span><AiFillExclamationCircle/></span> <p>{productData.available_qty} units available</p></div>
                        <div className="p-rating">
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaStar/></span>
                            <span><FaRegStarHalfStroke/></span>
                            <a href='#' className="p-rat-v">(0 verified ratings)</a>
                        </div>
                        <div className="product-info">{productData.product_desc}</div>
                        <div className="p-elig-dv">
                        <label className="p-container">
                            <p className="good-child">Eligible for instant delivery</p>
                            <input type="checkbox" checked={productData.instant_delivery}/>
                            <span className="checkmark"></span>
                            </label>    
                        </div>                        
                        <button className="p-add-to-cart"
                        onClick={()=> {
                            setCart(prevItems => [
                                ...prevItems, 
                                data
                              ]);
                        }
                    }
                        ><span><FaCartPlus/></span> <b>Add to cart</b> </button>
                        <p className="p-1-33-1"><span><MdOutlineShield/></span> {productData.guarantee} Day Return Guarantee</p>
                    </div>
                    <div className="product-right">
                        <Swiper navigation={true} modules={[Pagination, Navigation]}
                     slidesPerView={1}>
                        {
                            state.map(item=> {
                                return (
                                    <SwiperSlide>
                                        <img src={item} alt="image" /> 
                                    </SwiperSlide>
                                )
                            })
                        }
                            
            
                        </Swiper>
                        
                    </div>
                    
                </div>
                
            </div>
        <div className="product-spec">
            <p className="p-spec-title">Specifications</p>
            <div className="spec-more">
                <div className="p-spec-more-left">
                    <h4 className="p-spec-ml-tt">KEY FEATURES</h4>
                    <ul>
                        <li>Iphone 12</li>
                        <li>Iphone 12</li>
                        <li>Iphone 12</li>
                        <li>Iphone 12</li>
                        <li>Iphone 12</li>
                        <li>Iphone 12</li>
                    </ul>
                </div>
                <div className="p-spec-more-right">
                    <h4 className="p-spec-ml-tt">What's in the box</h4>
                    <ul>
                        <li>Iphone 12</li>
                        <li>Iphone 12</li>
                        <li>Iphone 12</li>
                        <li>Iphone 12</li>
                        <li>Iphone 12</li>
                        <li>Iphone 12</li>
                    </ul>
                </div>
                <div className="p-spec-more-rl2">
                    <h4 className="p-spec-ml-tt">Specifications</h4>
                    <div className="drp1">
                        <p className="pd-1"><span>Name:</span> Iphone 12</p>
                        <p className="pd-1"><span>Weight:</span> 0.62 kg</p>
                        <p className="pd-1"><span>Height:</span> 6.5"</p>
                        <p className="pd-1"><span>Color:</span> Peach</p>
                        <p className="pd-1"><span>Product Store</span> DrymFyre Store</p>
                    </div>
                        
                </div>
            </div>
        </div>
        </div>
        <Collect/>
    </div>
  )
}

export default Product
