import React, { useEffect, useState } from "react";
import AdminDash from "./AdminDash";
import { Alert, AlertTitle } from "@mui/material";

export default function Admin() {
  //Remove value from useState before production
  const [input, setInput] = useState("bestjups");
  const [showDash, setShowDash] = useState(false);
  const [warning, setWarning] = useState(false);

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    input === process.env.REACT_APP_PW && setShowDash(true);
    if (input !== process.env.REACT_APP_PW) {
      setWarning(true);
      setInterval(() => setWarning(false), 10000);
    }
  }
  useEffect(() => {
    setShowDash(false);
  }, []);

  if (!showDash) {
    return (
      <div>
        Admin Enter your password
        {warning && (
          <Alert severity="error" variant="filled">
            <AlertTitle>Invalid password!</AlertTitle> Please try again.
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={input} />
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  } else {
    return <AdminDash />;
  }
}
