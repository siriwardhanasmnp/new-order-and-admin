import React from 'react'
import Itemcard from '../../components/AgriMartCartComponents/Itemcard';
import data from "../../components/data";
import Header from "../../components/Header";
import AgriMartNavBar from '../../components/AgriMartNavBar/AgriMartNavBar';
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
  