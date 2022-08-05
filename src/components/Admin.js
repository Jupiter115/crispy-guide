import React, { useEffect, useState } from "react";
import { Alert, AlertTitle } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AdminDash from "./AdminDash";

//Context provider
export const LoginProvider = React.createContext();

export default function Admin() {
  const navigate = useNavigate();

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
    } else {
      navigate("/admin/dash/");
    }
  }
  useEffect(() => {
    setShowDash(false);
  }, []);

  if (!showDash) {
    return (
      <div className="Admin_div">
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
  }
  // else {
  //   return (
  //     <LoginProvider.Provider value={showDash}>
  //       <AdminDash />
  //     </LoginProvider.Provider>
  //   );
  // }
}
