// SmoothScroll.js
import React from "react";
import { Link } from "react-scroll";
import "./smooth.css";

function SmoothScroll() {
  return (
    <Link to="next" smooth={true} duration={500}>
      <div className="mouse">
        <div className="mouse-icon">
          <span className="mouse-wheel"></span>
        </div>
      </div>
    </Link>
  );
}

export default SmoothScroll;
