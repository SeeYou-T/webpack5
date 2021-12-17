import React from "react";
import ReactDom from "react-dom";
const Header = React.lazy(() => import("nav/Header"));
const Con = React.lazy(() => import("con/test"));

function index() {
  return (
    <React.Suspense fallback={null}>
      <Header />
      <Con />
    </React.Suspense>
  );
}

export default ReactDom.render(index(), document.getElementById("container"));
