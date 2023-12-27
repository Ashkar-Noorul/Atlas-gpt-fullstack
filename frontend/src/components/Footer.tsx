import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "20px", textAlign: "center", padding: "20px" }}>
          Forged with passion by{" "}
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link1"
              to={"https://github.com/Ashkar-Noorul"}
              target="_blank"
            >
              Ashkar_tech
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
