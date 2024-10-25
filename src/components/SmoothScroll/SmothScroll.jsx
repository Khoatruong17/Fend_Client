// SmoothScroll.js
import React from 'react';
import { Link } from 'react-scroll';
import "./smooth.css"

function SmoothScroll() {
    return (
        <Link
            to="next" // ID của phần tử mà bạn muốn scroll đến
            smooth={true}
            duration={500} // Thời gian để scroll đến đích, tính bằng milliseconds
        >
            <div className="mouse smoothscroll">
                <div className="mouse-icon">
                    <span className="mouse-wheel"></span>
                </div>
            </div>
        </Link>
    );
}

export default SmoothScroll;
