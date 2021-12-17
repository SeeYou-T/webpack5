import React from "react";
import Container from "./container";
import ReactDOM from "react-dom";
import("nav/Header").then((Header) => {
  ReactDOM.render(
    <div>
      {Header.default()}
      <Container />
    </div>,
    document.getElementById("container")
  );
});
