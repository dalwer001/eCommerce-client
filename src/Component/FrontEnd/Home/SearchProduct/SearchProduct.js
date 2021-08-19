import React, { useState } from "react";
// import { Collapse } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { Table } from "react-bootstrap";
import { TextField } from "@material-ui/core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import ProductDetails from "../ProductDetails/ProductDetails";
import Autocomplete from '@material-ui/lab/Autocomplete';

// const SearchProduct = () => {
//   const [showSearchBox, setShowSearchBox] = useState(false);
//   const [data, setData] = useState([]);

//   async function search(key) {
//     console.log(key);
//     let result = await fetch("http://localhost:5000/search/" + key); 

//     result = await result.json();
//     console.log(result);
//     setData(result);
//   }

//   return (
//     <>
        
//       {/* <Link onClick={() => setShowSearchBox(!showSearchBox)} to="#">
//         <FontAwesomeIcon
//           size="2x"
//           className="search ms-0 m-2 "
//           icon={faSearch}
//         />
//       </Link>
//       <Collapse in={showSearchBox}>
//         <TextField
//           onChange={(e) => search(e.target.value)}
//           name="title"
//           label="Search"
//           fullWidth
//         />
        
//       </Collapse>
     
//       {
//                 data.map(products=> <ProductDetails key={products._id} products={products}></ProductDetails> )
//             } */}
//     </>
//   );
// };

// export default SearchProduct;

export default function SearchProduct() {
    const [value, setValue] = React.useState(null);
    const [showSearchBox, setShowSearchBox] = useState(false);
  const [data, setData] = useState([]);

//   useEffect(() => {
//     const productsLoaders = async () => {
//         const res = await axios.get('http://localhost:5000/products')
//         setRecentProducts(res.data);
//     }
//     productsLoaders();
// }, []);

  async function search(key) {

    console.log(key);
    let result = await fetch("http://localhost:5000/search/" + key); 

    result = await result.json();
    console.log(result);
    setData(result);
  }
  
    return (
      <Autocomplete
        
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={data}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.title;
        }}
        renderOption={(option) => option.title}
        style={{ width: 300 }}
        freeSolo
        renderInput={(data) => (
          <TextField {...data} onChange={(e) => search(e.target.value)}
                    name="title"
                    label="Search"
                    fullWidth />
        )}
        
      />
    );
  }
  