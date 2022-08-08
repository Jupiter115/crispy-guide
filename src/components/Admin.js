import React, { useEffect, useState } from "react";
import { Alert, AlertTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./Admin.css";

//Context provider
export const LoginProvider = React.createContext();

export default function Admin() {
  const navigate = useNavigate();

  //Remove value from useState before production
  const [input, setInput] = useState("bestjups");
  const [warning, setWarning] = useState(false);

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (input !== process.env.REACT_APP_PW) {
      setWarning(true);
      setInterval(() => setWarning(false), 10000);
    } else {
      navigate("/admin/dash/");
    }
  }

  return (
    <div className="admin_div">
      <h2 className="admin_h2">Admin Sign In</h2>
      {warning && (
        <Alert severity="error" variant="filled">
          <AlertTitle>Invalid password!</AlertTitle> Please try again.
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={input}
          className="admin_input"
        />
        <Button className="admin_button" type="submit" variant="contained">
          Sign In
        </Button>
      </form>
    </div>
  );
}
