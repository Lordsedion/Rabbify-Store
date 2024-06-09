// @ts-nocheck
import React, { useEffect, useState } from 'react'
import './collect.css'
import img1 from '../../assets/images/thai-nguyen-7uEVvoPzwG4-unsplash.jpg'
import img2 from '../../assets/images/sophia-stark-qe8rHAhdOg0-unsplash.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa";




const Collect = () => {
    const [data1, setData1] = useState([])
    const [data_, setData_] = useState([])

    function replaceSpacesWithHyphens(str) {
        return str.split(' ').join('-');
      }
    

    useEffect(()=> {
        const url = "http://localhost:8000/api/products/"

        async function fetchData() {
            
          
            try {
              const response = await fetch(url);
          
              if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
              }
          
              const data = await response.json();
              console.log(data); // This will log the JSON data
              let keep = {}
          const len = (val)=> {
              return Object.keys(val).length
          }
      
          for (let i=0; i<Object.keys(data).length; i++) {
              if (keep[data[i]['category']]) {console.log("fred")}
              else {keep[data[i]['category']] = {}}
              keep[data[i]['category']][Object.keys(keep[data[i]['category']]).length] = data[i]
          }
      
          let c = []
      
          for (let i=0; i<len(keep); i++) {
              c = c.concat([{
                  "name": Object.keys(keep)[i],
                  "more": "Explore more than 10000+ items in this category",
                  "data": Object.values(keep[Object.keys(keep)[i]])
              }])
             }
      
          setData_(c)   
              setData1(Object.values(data))
            } catch (error) {
              console.error('There was a problem with the fetch operation:', error);
            }
          }
          
          fetchData();

          
          
    },[])
    console.log("SAD", data1, data_)

       

  return (
    <div className='collect'>
        <div className="container">
            <div className="collection-container"> 
            {
                data_.map(({name, data, more}, index)=> {
                    
                    return (
                        <div className="collect-items-s1" key={index}>
                            <div className="a1-d1">
                            <div className="t1p-sec">
                            <h2 className="co1-topic">{name}</h2>
                            <a href="/collect">Check the collection <FaArrowRight/></a>
                            </div>
                            <p className="e1-f2-1">{more}</p>
                            </div>
                                <Swiper navigation={true} modules={[Pagination, Navigation]}
                                slidesPerView={2}
                                spaceBetween={10}
                                breakpoints={{
                                    576: {
                                    //   width: 576,
                                    slidesPerView: 3,
                                    },
                                    768: {
                                    //   width: 768,
                                    slidesPerView: 3,
                                    },
                                    1024: {
                                    //   width: 768,
                                    slidesPerView: 4,
                                    },
                                }}
                    pagination={{
                    clickable: true,
                    }} className='mySwiper'> 
                                    {
                                        data.map(({image, name, price, category, product_no}, index)=> {
                                            let product_url = `product/${replaceSpacesWithHyphens(name)}-${product_no}`
                                            return (
                                            <SwiperSlide key={index}>
                                        <a href={`/${product_url}`}>
                                            <div className="collect-card">
                                                <div className="collect-card-image">
                                                    <img src={image[0]} alt="Image" />
                                                </div>
                                                <div className="card-info">
                                                    <div className="card-name">{name}</div>
                                                    <div className="card-category">{category}</div>
                                                    <div className="card-price">${price}</div>
                                                </div>
                                            </div>
                                        </a>
                                    
                                    </SwiperSlide>  
                                            )
                                        })
                                    }                       
                                </Swiper>
                        </div>   
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Collect
