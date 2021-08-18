import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TextField} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ProductDetails from '../ProductDetails/ProductDetails';

const SearchProduct = () => {
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [data, setData] = useState([]);

async function search(key) {
  console.log(key);
  let result = await fetch ("http://localhost:5000/search/"+ key);

  result = await result.json();
  console.log(result) 
  setData(result)
}

    return (
        <>
            <Link onClick={() => setShowSearchBox(!showSearchBox)} to="#"><FontAwesomeIcon size="2x" className="search ms-0 m-2 " icon={faSearch} /></Link>
            <Collapse in = {showSearchBox}>
            <TextField onChange ={(e) =>search(e.target.value)} name="title" label="Search" fullWidth  />
          
            </Collapse>
            {
                data.map(products=> <ProductDetails key={products._id} products={products}></ProductDetails> )
            }
            
        </>
    );
};

export default SearchProduct;