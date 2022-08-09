
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

export default function Search({ handleChange, handleSubmit, search }) {
  return (
    <Container>
      <Form.Control
        type="text"
        placeholder="search"
        value={search}
        onChange={handleChange}
        onSubmit={handleSubmit}
        style={{ margin: "0px 0px 30px 0px" }}
      />
    </Container>
  );
}
