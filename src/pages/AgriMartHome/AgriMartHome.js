import React from 'react';
import AgriMartNavBar from '../../components/AgriMartNavBar/AgriMartNavBar';
import AgriMartFooter from '../../components/AgriMartFooter/AgriMartFooter';
import './AgriMartHome.css';
import { Button } from 'react-bootstrap';
import { Carousel, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

//images - corousel
import land from '../../resources/images/land.jpg';
import harvest from '../../resources/images/pluck.jpg';
import pluck from '../../resources/images/harvest.jpg';
import output from '../../resources/images/delivery.jpg';

import fruits from '../../resources/images/fruits.jpeg';
import vege from '../../resources/images/vege.jpeg';
import spices from '../../resources/images/spices.jpeg';


const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


export default function AgriMartHome() {

  
  return (
    <div style={{backgroundColor:'#EEF3EB'}}> 
      <div>
        <AgriMartNavBar/>
      </div>
<div >
        <h1 style={{textAlign:'center', fontWeight:'bold', fontFamily:'railway', paddingTop:'110px'}}>Welcome to Agri Mart </h1>

<div style={{ width:'100%', height:'550px'}}>
    
        <div>
        <Carousel autoplay={true} dotPosition='bottom'>
          <div>
            <img style={{height:'400px', width:'100%', marginTop:'20px', borderRadius:'10px'}} src={land}/>
          </div>
          <div>
            <img style={{height:'400px', width:'100%', marginTop:'20px', borderRadius:'10px'}} src={harvest}/>
          </div>
          <div>
            <img style={{height:'400px', width:'100%', marginTop:'20px', borderRadius:'10px'}} src={pluck}/>
          </div>
          <div>
            <img style={{height:'400px', width:'100%', marginTop:'20px', borderRadius:'10px'}} src={output}/>
          </div>
          </Carousel>
          </div>
 
</div>
       
    <div>
      <Link to="/ToProducts">
        <Button  style={{width: "170px",height: "50px", marginLeft:'650px',color:'black', fontWeight:'bolder', borderColor:'#68BB59', fontSize:'22px'}} variant="success">Shop Now</Button>
      </Link>
    </div>
    <br/>   <br/>

    <Row justify='space-around'>
<Col span={6} style={{marginLeft:'20px'}}>
  <Link to='ToProducts'><img style={{height: '300px', width:'260px', borderRadius:'10px'}} src={vege}></img></Link>
</Col>
<Col span={6}>
<Link to='ToProducts'><img style={{height: '300px', width:'260px', borderRadius:'10px'}} src={fruits}></img></Link>
</Col>
<Col span={6}>
<Link to='ToProducts'><img style={{height: '300px', width:'260px', borderRadius:'10px'}} src={spices}></img></Link>
</Col>
    </Row>


  </div>
  <div style={{height:'80px'}}></div>
    
    </div>
  

  );
}