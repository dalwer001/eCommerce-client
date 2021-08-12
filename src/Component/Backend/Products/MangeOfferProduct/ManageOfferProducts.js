import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../../AdminPanel/Sidebar/Sidebar';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function ManageOfferProducts() {
    const [offerProduct, setOfferProduct] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/offerProducts")
          .then((res) => res.json())
          .then((data) => setOfferProduct(data));
      }, []);
     
      const statusUpdated = () => {
        fetch('http://localhost:5000/offerProducts')
          .then(res => res.json())
          .then(data => setOfferProduct(data))
      }
    
      const handlePublish = (id) => {
    
        const status = 'Published'
        const user = { id, status };
    
        const url = `http://localhost:5000/publishOfferProduct/${id}`;
        fetch(url, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => {
            if (data) {
              alert('Offer Product Published Successfully');
              statusUpdated();
            }
          })
      }
    
      const handleUnpublish =(id)=>{
        const status = 'Unpublished'
        const user = { id, status };
    
        const url = `http://localhost:5000/publishOfferProduct/${id}`;
        fetch(url, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => {
            if (data) {
              alert('Offer Product Unpublished Successfully');
              statusUpdated();
            }
          })
      }
    
  
  const classes = useStyles();

  return (
   <div className="row m-0">
       <div className="col-md-2 p-0">
      <Sidebar></Sidebar>
       </div>
       <div className="col-md-10">
       <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="left">Picture</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="left">Price</StyledTableCell>
            <StyledTableCell align="left">Offer</StyledTableCell>
            <StyledTableCell align="left">Offer Price</StyledTableCell>
            
            <StyledTableCell align="left">Size</StyledTableCell>
            <StyledTableCell align="left">Category</StyledTableCell>
            <StyledTableCell align="left">Type</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {offerProduct.map((op) => (
            <StyledTableRow key={op.name}>
                  <StyledTableCell align="left">{op.title}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
              {op.image ? (
                      <img
                        style={{ width: "8rem", height: "8rem" }}
                        src={`data:image/png;base64,${op.image.img}`}
                        alt=""
                      />
                    ) : (
                      <img
                        style={{ width: "8rem", height: "8rem" }}
                        className="img-fluid mb-3"
                        src={`http://localhost:5000/${op.img}`}
                        alt=""
                      />
                    )}
              </StyledTableCell>
              <StyledTableCell align="left">{op.description}</StyledTableCell>
              <StyledTableCell align="left">${op.mainPrice}</StyledTableCell>
              <StyledTableCell align="left">{op.offer}%</StyledTableCell>
              <StyledTableCell align="left">${op.mainPrice - (op.mainPrice * op.offer / 100)}</StyledTableCell>
             
              <StyledTableCell align="left">{op.size}</StyledTableCell>
              <StyledTableCell align="left">{op.category}</StyledTableCell>
              <StyledTableCell align="left">{op.type}</StyledTableCell>
              <StyledTableCell align="left">{op.quantity}</StyledTableCell>
              <StyledTableCell align="left">{op.status}</StyledTableCell>

              <button onClick={() => handlePublish(op._id)} className="alert alert-success m-2 fw-bold">Publish</button>
              <button onClick={() => handleUnpublish(op._id)} className="alert alert-danger m-2 fw-bold">Unpublish</button>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

       </div>

   </div>
  );
}

