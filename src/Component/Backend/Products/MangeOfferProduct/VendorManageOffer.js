import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React, { useEffect, useState,useContext } from 'react';
import { UserContext } from '../../../../App';
import VendorSidebar from '../../VendorPanel/VendorSidebar';
import './VendorManageOffer.css'
// import { Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
  head: {
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

export default function VendorManageOffer() {
  const [offerProduct, setOfferProduct] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("https://pacific-plateau-10670.herokuapp.com/offerProduct?email="+loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOfferProduct(data));
  }, []);

  // update
  const history = useHistory();
  const handleUpdate = (id) => {
      history.push(`/updateOfferProduct/${id}`);
  }



  const classes = useStyles();

  return (
    <div className="row m-0">
      <div className="col-md-2 p-0">
      <VendorSidebar></VendorSidebar>
      </div>
      <div className="col-md-10  mt-2">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead style={{  backgroundColor: "#0B4C61"}}>
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
                    <img
                      style={{ width: "8rem", height: "8rem" }}
                      src={op.image}
                      alt=""
                    />
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
                  <div class="dropdown offer-table-row">
            <button class="btn btn-sm btn-light border dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-arrow-down-right-circle"></i>
            </button>
            <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                <li>
                    {/* <button onClick={() => handlePublish(op._id)} className="alert alert-success o-button fw-bold">Publish</button>
              <button onClick={() => handleUnpublish(op._id)} className="alert alert-danger o-button fw-bold">Unpublish</button> */}
              <button onClick={() => handleUpdate(op._id)} className="btn btn-success mt-3">Update</button>
                </li>
            </ul>
        </div>
              
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>

    </div>
  );
}

