import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Collapse } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { Table } from "react-bootstrap";
import { TextField } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ProductDetails from "../ProductDetails/ProductDetails";
import { Autocomplete } from '@material-ui/lab';
import { Link, useHistory } from 'react-router-dom';
import './SearchProducts.css'

const SearchProduct = () => {
  
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [data, setData] = useState([])

const history = useHistory();


const singleProductClick = (_id) => {
    history.push(`/products/${_id}`);
}
  async function search(key) {
    console.log(key);
    let result = await fetch("https://pacific-plateau-10670.herokuapp.com/search/" + key); 

    result = await result.json();
    console.log(result);
    setData(result);
  }

  return (
    <>
        
       {/* <Link onClick={() => setShowSearchBox(!showSearchBox)} to="#">
        <FontAwesomeIcon
          size="2x"
          className="search ms-0 m-2 "
          icon={faSearch}
        />
      </Link>
      <Collapse in={showSearchBox}>
        <TextField
          onChange={(e) => search(e.target.value)}
          name="title"
          label="Search"
          fullWidth
          autoComplete='off'
        />
        
      </Collapse> */}
   
     <div className="searchItem">
      {
                data.map(products=> <p onClick={() => singleProductClick(products._id)}>{products.title}</p> )
            } 
            </div>
          
    </>
  );
};

export default SearchProduct;

// export default function SearchProduct() {
//     const [value, setValue] = React.useState(null);
//     const [showSearchBox, setShowSearchBox] = useState(false);
//     // const [recentProducts, setRecentProducts] = useState([]);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const productsLoaders = async () => {
//         const res = await axios.get('https://pacific-plateau-10670.herokuapp.com/products')
//         setData(res.data);
//     }
//     productsLoaders();
// }, []);
// // useEffect(() => {
// //   fetch(`https://pacific-plateau-10670.herokuapp.com/products`)
// //       .then(res => res.json())
// //       .then(data =>{
// //           data.map(data => setData(data[0]))
// //       })
         
// // }, [])

// const history = useHistory();


// const singleProductClick = (_id) => {
//     history.push(`/products/${_id}`);
// }

//   async function search(key) {

//     console.log(key);
//     let result = await fetch("https://pacific-plateau-10670.herokuapp.com/search/" + key); 

//     result = await result.json();
//     console.log(result);
//     setData(result);
//   }
  
//     return (
//       <>
//       <Autocomplete
        
//         selectOnFocus
//         clearOnBlur
//         handleHomeEndKeys
//         id="free-solo-with-text-demo"
//         options={data}
//         // onClick={() => singleProductClick(recentProducts._id)}
//         getOptionLabel={(option) => {
          
//           // Value selected with enter, right from the input
//           if (typeof option === 'string') {
//             return option;
//           }
//           // Add "xxx" option created dynamically
//           if (option.inputValue) {
//             return option.inputValue;
//           }
//           // Regular option
//           return option.title;
          
          
//         }}
    
//         renderOption={(option) => option.title}
//         style={{ width: 300 }}
//         freeSolo
        
//         renderInput={(data) => (
          
//           <TextField {...data} onChange={(e) => search(e.target.value)}
//                     name="title"
//                     label="Search"
//                     fullWidth />
                    
//         )}
        
        
//       />
//       <Link to="#" onClick={() => singleProductClick(data._id)} >
      
//   </Link>
//   </>
//     );
//   }
  