import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TextField} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchProduct = () => {
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [data, setData] = useState([]);

async function search(key) {
  console.log(key);
  let result = await fetch ("https://fakestoreapi.com/products"+ key);
  console.log(result) 
  result = await result.json();
  setData(result)
}

    return (
        <>
            <Link onClick={() => setShowSearchBox(!showSearchBox)} to="#"><FontAwesomeIcon size="2x" className="search ms-0 m-2 " icon={faSearch} /></Link>
            <Collapse in = {showSearchBox}>
            <TextField onChange ={(e) =>search(e.target.value)} name="title" label="Search" fullWidth  />
            </Collapse>
           
        </>
    );
};

export default SearchProduct;