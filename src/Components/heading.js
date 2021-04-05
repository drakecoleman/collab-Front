import React from "react";
import { Link } from "react-router-dom";

function heading() {
  return (
    <div className="nav">
      <h1>Collaboration</h1>
      <div>
        <button>Login</button>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}
export default heading;
