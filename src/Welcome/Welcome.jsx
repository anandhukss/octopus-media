import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-text">
        <p>
          <span className="small">AN ESSENTIAL</span> <br />{" "}
          <span className="small">ASPECT</span> OF CREATIVITY IS{" "}
          <span className="small">NOT</span> <br />{" "}
          <span className="small">BEING</span> AFRAID TO FAIL
        </p>
      </div>
    </div>
  );
}

export default Welcome;
