import { fontSize } from "@mui/system";
import React from "react";

const itemStyle = {
  backgroundColor: "#EDF2F4",
  fontSize: 13,
  fontFamily: 'Aleo , serif',
  maxWidth: "25%"
};
const styles = {
  maxHeight: "30em",
  margin: "50px"
};
const card = {
  display: "block",
  margin: "2%"
};

const p = {
  margin: "20%",
  justifyContent: "center",
  fontSize: "23px",
};

const p2 = {
  justifyContent: "center"
}

export default function Item({ elem }) {
  return (
    <div style={card}>
      <div style={itemStyle}>
      <h1 style={p}>{elem.nombre}</h1>
      <img style={styles} src={elem.url}/>
      <h2>{elem.precio}</h2>
      <h3 style={p2}>{elem.description}</h3>
      </div>
    </div>
  );
}
