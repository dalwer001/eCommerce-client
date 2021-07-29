import { Button, Slider, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import './ShopFilter.css'
import { Collapse } from 'react-bootstrap';
import Pulse from 'react-reveal/Pulse';


const ShopFilter = () => {
  
    const [showProduct, setShowProduct] = useState(false);


    // Our States
  const [value, setValue] =  React.useState([200,300]);
  
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
  
      
    return (
        <div className="mb-3" >
             <div className="d-flex justify-content-end ">
             
             <Button  className="fw-bolder "  onClick={() => setShowProduct(!showProduct)} variant="contained">Filter</Button>
             
            
             {/* <a class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Sort by 
             </a>
 
             <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                 <li><a class="dropdown-item" href="#">Sorted by Popularity</a></li>
                 <li><a class="dropdown-item" href="#">Sorted by Price</a></li>
                 <li><a class="dropdown-item" href="#">Sorted by Avarage Rating</a></li>
             </ul> */}
 
             </div>
           
           
             <Collapse in = {showProduct}>
             
               <div className="row ">
               <Pulse >
                        <div className="col-md-6">
                       
                        <div className="">
                        <div>
                            <p className="fs-4 single-size-text mt-2 mx-3">Size</p>
                        </div>
                        <div className=" rounded normal p-1">
                            <a href="#" alt="" className=" product-size-hoverShop mx-3 text-decoration-none ">XS</a>
                            <a href="#" alt="" className="mx-3 text-decoration-none product-size-hoverShop">S</a>
                            <a href="#" alt="" className="mx-3 text-decoration-none product-size-hoverShop">M</a>
                            <a href="#" alt="" className="mx-3 text-decoration-none product-size-hoverShop">L</a>
                            <a href="#" alt="" className="mx-3 text-decoration-none product-size-hoverShop">XL</a>
                        </div> 
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div style={{
                            margin: 'auto',
                            display: 'block',
                            width: 'fit-content'
                            }}>
                            <Typography className="fs-4 single-size-text mt-2 " id="range-slider" gutterBottom>
                                Select Price Range:
                            </Typography>
                            <Slider
                                value={value}
                                min = {200}
                                max={1000}
                                onChange={rangeSelector}
                             valueLabelDisplay="auto"
                            />
                            Your range of Price is between <span className="fw-bolder">${value[0]}</span> and <span className="fw-bolder">${value[1]}</span> 
                            </div>
                        </div>
                        </Pulse> 
                </div>
                
            </Collapse>
           
           
        </div>
    );
};

export default ShopFilter;