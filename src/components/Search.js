import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

  


export default function Search({handleChange,handleSubmit,search}) {
  const element = <FontAwesomeIcon icon={faMagnifyingGlass} />
  
  return (
    <div>
    
  
    <form className="search_form" onSubmit={handleSubmit}>
    
    <label className="search_label" htmlFor="Search"></label>
    <input className="search_input"
      id="Search"
      type="text"
      placeholder="search Here"
      onChange={handleChange}
      onSubmit={handleSubmit}
      value={search}
      style={{ margin: "0px 0px 30px 0px" }}
    />
    <button className="search_button" type="submit">{element}</button>
    </form>
    </div>
  )}

  