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
import Sidebar from '../AdminPanel/Sidebar/Sidebar';
import './ManageVendor.css'

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

export default function ManageVendor() {
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    fetch("https://pacific-plateau-10670.herokuapp.com/vendors")
      .then((res) => res.json())
      .then((data) => setVendors(data));
  }, []);

  const statusUpdated = () => {
    fetch('https://pacific-plateau-10670.herokuapp.com/vendors')
      .then(res => res.json())
      .then(data => setVendors(data))
  }

  const handleAccept = (id) => {

    const status = 'Accepted'
    const user = { id, status };

    const url = `https://pacific-plateau-10670.herokuapp.com/acceptVendor/${id}`;
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
          alert('Status Updated');
          statusUpdated();
        }
      })
  }

  const handleDecline =(id)=>{
    const status = 'Declined'
    const user = { id, status };

    const url = `https://pacific-plateau-10670.herokuapp.com/acceptVendor/${id}`;
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
          alert('Status Updated');
          statusUpdated();
        }
      })
  }


  const classes = useStyles();

  return (
    <div className="row m-0">
      <div className="col-md-2 col-lg-2 p-0">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead style={{  backgroundColor: "#0B4C61"}}>
              <TableRow>
                <StyledTableCell align="left">First Name</StyledTableCell>
                <StyledTableCell align="left">Last Name</StyledTableCell>
                <StyledTableCell align="left">Company Name</StyledTableCell>
                <StyledTableCell align="left">Contact Number</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Password</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {vendors.map((p) => (
                <StyledTableRow key={p.name}>
                  <StyledTableCell align="left">{p.firstName}</StyledTableCell>
                  <StyledTableCell align="left">{p.lastName}</StyledTableCell>
                  <StyledTableCell align="left">{p.companyName}</StyledTableCell>

                  <StyledTableCell align="left">{p.contactNumber}</StyledTableCell>
                  <StyledTableCell align="left">{p.email}</StyledTableCell>
                  <StyledTableCell align="left">{p.password}</StyledTableCell>
                  <StyledTableCell align="left">{p.status}</StyledTableCell>
                
                  <div class="dropdown tables-row">
            <button class="btn btn-sm btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-arrow-down-left-circle"></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                <button onClick={() => handleAccept(p._id)} className="alert alert-success a-button  fw-bold">Accept</button>
                  <button onClick={() => handleDecline(p._id)} className="alert alert-danger a-button  fw-bold">Decline</button>
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
