import React from 'react';
import fashion4 from '../../../../Images/images4.jpg'
import fashion5 from '../../../../Images/images5.jpg';
import fashion6 from '../../../../Images/images6.jpg';
import './Category.css';

const Category = () => {
    return (
        <section class="container overflow-hidden categories mt-5">
            <div class="row g-5">
              <div class="col">
               <div class="p-3 rounded bg-warning d-flex align-items-center justify-content-around">
                  <h1 class="text-white">Men</h1>
                  <img src={fashion4} alt=""/>

               </div>
              </div>
              <div class="col">
                <div class="p-3 rounded bg-success d-flex align-items-center justify-content-around">
                    <h1 class="text-white">Women</h1>
                    <img src={fashion5} alt=""/>
                </div>
              </div>
              <div class="col">
                <div class="p-3 rounded bg-primary d-flex align-items-center justify-content-around">
                    <h1 class="text-white">Kids</h1>
                    <img src={fashion6} alt=""/>
                </div>
              </div>
            </div>
        </section>
    );
};

export default Category;