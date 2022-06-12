import React from 'react'

export const CusCard = (props) => {
    return (
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
          <div style={{ width: '25rem'}} class="card p-50 overflow-hidden h-100 shadow">
             
              <div class="CusCard-body">
                  <h5 class="card-title">{props.title}</h5>
                  <h5 class="card-title">Total:    Rs {props.price}</h5> 
                  <p class="CusCard-text-bottom">{props.desc}</p>
                  <button class="btn btn-success d-danger  btn-danger">Pay Now</button>  
               </div>
          </div>
      </div>
    );
  };
  
  export default CusCard;