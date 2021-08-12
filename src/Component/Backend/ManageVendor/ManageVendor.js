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

export default function ManageVendor() {
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/vendors")
      .then((res) => res.json())
      .then((data) => setVendors(data));
  }, []);

  const statusUpdated = () => {
    fetch('http://localhost:5000/vendors')
      .then(res => res.json())
      .then(data => setVendors(data))
  }

  const handleAccept = (id) => {

    const status = 'Accepted'
    const user = { id, status };

    const url = `http://localhost:5000/acceptVendor/${id}`;
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

    const url = `http://localhost:5000/acceptVendor/${id}`;
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
            <TableHead>
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
                  <button onClick={() => handleAccept(p._id)} className="alert alert-success m-2 fw-bold">Accept</button>
                  <button onClick={() => handleDecline(p._id)} className="alert alert-danger m-2 fw-bold">Decline</button>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>

    </div>
  );
}
