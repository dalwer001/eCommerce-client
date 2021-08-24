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
import './ManageCategory.css'
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

export default function ManageCategory() {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCat(data));
  }, []);

  

  



  const classes = useStyles();
  const history = useHistory();
  const handleUpdate = (id) => {
      history.push(`/updateCategory/${id}`);
  }
  return (
    <div className="row m-0">
      <div className="col-md-2 col-sm-2 col-lg-2 p-0">
  <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 mt-2 col-sm-10">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead style={{  backgroundColor: "#0B4C61"}}>
              <TableRow >
                <StyledTableCell align="left">Title</StyledTableCell>
                
                <StyledTableCell align="left">Action</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {cat.map((c) => (
                <StyledTableRow key={c.name}>
                  <StyledTableCell align="left">{c.category}</StyledTableCell>
                  
                 
                  <div class="dropdown table-row">
            <button class="btn btn-sm btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-arrow-down-right-circle"></i>
            </button>
            <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                <li>
                <button  onClick={() => handleUpdate(c._id)} className="p-button mt-3">Update</button>
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
