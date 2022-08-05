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

// import EditIcon from "@mui/icons-material/Edit";

// const axios = require("axios");

export default function AdminDash() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // axios.get(`http://localhost:3111/icecreams/${id}`).then((res) => {
    //   setData(res.data);
    // });
    setData(seeds);

    // need to remove timeout in production
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  //Table Settings
  function createData(name, description, origPrice, salePrice, edit) {
    return { name, description, origPrice, salePrice, edit };
  }

  // const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0, "Url")];
  const rows = [];
  seeds.forEach((item) => {
    rows.push(
      createData(
        item.title,
        item.description,
        "$" + item["orig-price"],
        "$" + item["sale-price"],
        <EditIcon />
      )
    );
  });

  //Loading Sreen
  if (loading) {
    return <img src={throbber} alt="Throbber" />;
  }

  //Main Dash
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Original Price</TableCell>
            <TableCell align="left">Sale Price</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">
                {row.description.length > 75
                  ? row.description.slice(0, 75) + "..."
                  : row.description}
              </TableCell>
              <TableCell align="left">{row.origPrice}</TableCell>
              <TableCell align="left">{row.salePrice}</TableCell>
              <TableCell align="center">{row.edit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
