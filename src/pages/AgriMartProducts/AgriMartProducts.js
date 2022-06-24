import React, { useEffect, useState } from "react";
import axios from "axios";
import Itemcard from "../../components/AgriMartCartComponents/Itemcard";
import data from "../../components/data";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import AgriMartFooter from "../../components/AgriMartFooter/AgriMartFooter";
// import AgriMartFilterSideBar from '../../components/AgriMartFilterSideBar/AgriMartFilterSideBar';
import { Card, Row, Col, Container } from "react-bootstrap";
import "./AgriMartProduct.css";

const Productpg = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const navigateToConfirmed = (post) => {
    navigate(`/confirmed`, { state: post }); // here we will redirect user and send your data into state
  };

  const [searchOption, setSearchOption] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/products", {params: searchOption})
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [searchOption]);

  

  return (
    <>
        <div>
          <Header onChange={setSearchOption} />
        </div>
        <div className="product-row">
            <div className="row justify-content-center">
              {posts.map((item, index) => {
                return (
                  <Itemcard
                    img={item.img}
                    title={item.productTitle}
                    description={item.description}
                    quantity={item.quantity}
                    price={item.price}
                    item={item}
                    key={item.productId}
                  />
                );
              })}
            </div>
            </div>
            <AgriMartFooter/>
    </>
  );
};

export default Productpg;
