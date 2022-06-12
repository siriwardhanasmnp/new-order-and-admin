import React from 'react'
import Itemcard from '../../Components/Itemcard';
import data from "../../Components/data";
import Header from "../../Components/Header";
import AgriMartNavBar from '../../Components/AgriMartNavBar/AgriMartNavBar';
import { Card, Container } from 'react-bootstrap';
import "./AgriMartProduct.css"

const Productpg = () =>{
 
    return (
      <>
        <div><AgriMartNavBar/></div>
        {/* <div className="col-11 col-md-2 col-lg-3 mx-0 mb-4"></div> */}
          <div>
            <section className="py-4 container">
            <div><Header/></div>
                <div className='row justify-content-center'> 
                  {data.produtData.map((item, index)=>{
                      return (  
                        <Itemcard 
                          img={item.img} 
                          title={item.title}
                          decs={item.desc} 
                          price={item.price} 
                          item={item} 
                          key={index}
                        />
                      )
                  })}
                  </div>        
            </section> 
          </div> 
      </> 
    );
  }
  
  export default Productpg;
  