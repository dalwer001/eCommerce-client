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
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

// import Sidebar from "../../AdminPanel/Sidebar/Sidebar";

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

export default function VendorManageProducts() {
  const [product, setProduct] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:5000/product?email="+loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const classes = useStyles();

  return (
    <div className="row m-0">
      <div className="col-md-2 col-lg-2 p-0">
        <VendorSidebar></VendorSidebar>
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

                <StyledTableCell align="left">Size</StyledTableCell>
                <StyledTableCell align="left">Category</StyledTableCell>
                <StyledTableCell align="left">Type</StyledTableCell>
                <StyledTableCell align="left">Quantity</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {product.map((p) => (
                <StyledTableRow key={p.name}>
                  <StyledTableCell align="left">{p.title}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                      <img
                        style={{ width: "8rem", height: "8rem" }}
                        src={p.image}
                        alt=""
                      />
                  </StyledTableCell>
                  <StyledTableCell align="left">{p.description}</StyledTableCell>
                  <StyledTableCell align="left">{p.price}</StyledTableCell>

                  <StyledTableCell align="left">{p.size}</StyledTableCell>
                  <StyledTableCell align="left">{p.category}</StyledTableCell>
                  <StyledTableCell align="left">{p.type}</StyledTableCell>
                  <StyledTableCell align="left">{p.quantity}</StyledTableCell>
                  <StyledTableCell align="left">{p.status}</StyledTableCell>
                  {/* <button onClick={() => handlePublish(p._id)} className="alert alert-success m-2 fw-bold">Publish</button>
                  <button onClick={() => handleUnpublish(p._id)} className="alert alert-danger m-2 fw-bold">Unpublish</button> */}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>

    </div>
  );
}
