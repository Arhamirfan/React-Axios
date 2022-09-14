import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../API/GoogleAuth";
function Header() {
  return (
    <div>
      <Link to="/">Streamy</Link>
      <Link to="/">All Streams</Link>
      <GoogleAuth />
    </div>
  );
}

export default Header;
