import React, {useEffect, useState } from 'react'
import axios from 'axios';
import Itemcard from '../../components/AgriMartCartComponents/Itemcard';
import data from "../../components/data";
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import AgriMartNavBar from '../../components/AgriMartNavBar/AgriMartNavBar';
// import AgriMartFilterSideBar from '../../components/AgriMartFilterSideBar/AgriMartFilterSideBar';
import { Card, Row, Col, Container } from 'react-bootstrap';
import "./AgriMartProduct.css"




const Productpg = () =>{

  const navigate = useNavigate();
const [posts,setPosts]=useState([]);
const navigateToConfirmed= (post) =>{
  navigate(`/confirmed`, { state: post}); // here we will redirect user and send your data into state
}


  useEffect(()=>{
    axios.get("http://localhost:8080/getList")
    .then(res => {
      
      setPosts(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
  },[])
  
 
    return (
      <>
        <div><AgriMartNavBar/></div>
        {/* <div className="col-11 col-md-2 col-lg-3 mx-0 mb-4"></div> */}
          <div>
         
            {/* <section className="py-4 container"> */}
            <div><Header/></div>
            <Row>
              <Col sm={1}>
              {/* <AgriMartFilterSideBar/> */}
              {/* <h1>bjhsnjnnnnnnnnnnnnnnnnnnnnnnnnnnnjjjjjjjjjjabj</h1>
              <h1>bjhsnjnnnnnnnnnnnnnnnnnnnnnnnnnnnjjjjjjjjjjabj</h1>
              <h1>bjhsnjnnnnnnnnnnnnnnnnnnnnnnnnnnnjjjjjjjjjjabj</h1>
              <h1>bjhsnjnnnnnnnnnnnnnnnnnnnnnnnnnnnjjjjjjjjjjabj</h1> */}
              </Col>
            {/* <AgriMartFilterSideBar/> */}
            <Col sm={10}>
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
                  </Col>  
                  </Row>     
            {/* </section>  */}
          </div> 
         


         
         
      </> 
    );
  }
  
  export default Productpg;
  