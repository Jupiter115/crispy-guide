import React, { useState, useEffect } from "react";
import seeds from "../data/seeds.json";

import throbber from "../assets/180-ring-with-bg.svg";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// import EditIcon from "@mui/icons-material/Edit";

const axios = require("axios");

export default function AdminDash() {
  //Context Consumer

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://mysterious-temple-52384.herokuapp.com/");
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  //Table Settings
  function createData(name, description, price, edit, id) {
    return { name, description, price, edit, id };
  }

  const rows = [];
  data.forEach((item) => {
    rows.push(
      createData(
        item.title,
        item.description,
        "$" + item["orig"],
        <Link to={`/admin/edit/${item._id}`}>
          <EditIcon />
        </Link>,
        item._id
      )
    );
  });

  //Window Event Listener
  let hide = false;
  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 500px)").matches) {
      hide = false;
    } else {
      hide = true;
    }
  });

  //Loading Sreen
  if (loading) {
    return <img src={throbber} alt="Throbber" />;
  }

  //Main Dash
  return (
    <>
      <Button variant="outlined" size="large">
        <Link to="/admin/post">New Post</Link>
      </Button>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 75 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Sale Price</TableCell>
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
    </>
  );
}
