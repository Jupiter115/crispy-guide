import React, { useState, useEffect } from "react";

import throbber from "../assets/180-ring-with-bg.svg";

import Table from "@mui/material/Table";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material/";

import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const axios = require("axios");

export default function AdminDash() {
  //Context Consumer
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://mysterious-temple-52384.herokuapp.com/")
      .then((res) => setData(res.data))
      .then(() => setTimeout(() => setLoading(false), 500));
  }, []);

  //Table Settings
  function createData(name, description, price, edit, id) {
    return { name, description, price, edit, id };
  }

  const rows = [];
  data
    .slice(0)
    .reverse()
    .forEach((item) => {
      rows.push(
        createData(
          item.title,
          item.description,
          "$" + item["price"],
          <Link to={`/admin/edit/${item._id}`}>
            <EditIcon className="adminDash_edit" />
          </Link>,
          item._id
        )
      );
    });

  //Loading Sreen
  if (loading) {
    return (
      <center>
        <img src={throbber} alt="Throbber" />
      </center>
    );
  }

  //Main Dash
  return (
    <div className="adminDash_container">
      <Button className="adminDash_button" variant="contained" size="large">
        <Link className="adminDash_a" to="/admin/post">
          New Post
        </Link>
      </Button>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 75 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ITEM TITLE</TableCell>
              <TableCell align="left">DESCRIPTION</TableCell>
              <TableCell align="left">SALE PRICE</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name.length > 45
                    ? row.name.slice(0, 75) + "..."
                    : row.name}
                </TableCell>
                <TableCell align="left">
                  {row.description.length > 75
                    ? row.description.slice(0, 75) + "..."
                    : row.description}
                </TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="center">{row.edit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
