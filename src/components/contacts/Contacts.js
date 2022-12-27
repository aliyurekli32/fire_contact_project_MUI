import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { useFetch } from "../../utils/functions";
import {removeUser} from "../../utils/functions"

const Contacts = ({editUser}) => {
  const {isloading, contactList}=useFetch();
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Delete</TableCell>
              <TableCell align="left">Edit</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
           
{isloading ? (
  <TableRow>
    <TableCell>
      Loading

    </TableCell>
  </TableRow>
) : contactList?.length===0 ? (<TableRow>
  <TableCell>
    Veri bulunamadı

  </TableCell>
</TableRow>) :(
  contactList?.map((item)=>(
    <TableRow>
      <TableCell>{item.username}</TableCell>
      <TableCell>{item.phoneNumber}</TableCell>
      <TableCell>{item.gender}</TableCell>
      <TableCell onClick={()=>removeUser(item.id)} role="button" style={{cursor:"pointer"}} ><DeleteIcon /></TableCell>
      <TableCell style={{cursor:"pointer"}} onClick={()=>editUser(
        item.id,
        item.username,
        item.phoneNumber,
        item.gender
      )} type="button" ><EditIcon /></TableCell>
    </TableRow>
  ))
) }
           
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;
