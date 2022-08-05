import React, { useState, useEffect, useContext } from "react";
import seeds from "../data/seeds.json";

import throbber from "../assets/180-ring-with-bg.svg";
import { LoginProvider } from "./Admin";

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
import { red } from "@mui/material/colors";

// import EditIcon from "@mui/icons-material/Edit";

// const axios = require("axios");

export default function AdminDash() {
  //Context Consumer
  const login = useContext(LoginProvider);
  console.log("admin dash " + login);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async (req, res) => {
    const data = await fetch("https://mysterious-temple-52384.herokuapp.com/");

    setData(data.json());
  };

  useEffect(() => {
    fetchData();
    // setData(seeds);
    // need to remove timeout in production
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  //Table Settings
  function createData(name, description, orig, price, edit) {
    return { name, description, orig, price, edit };
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
    <>
      <Button variant="outlined" size="large">
        <Link to="/admin/post"> New Post</Link>
      </Button>
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
                <TableCell align="left">{row.orig}</TableCell>
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
