import React from "react";
import Card from "./Card";


function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="/">
            {" "}
            <img src="logo.jpg" alt="" width={"120px"} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-1">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/AboutP">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link"  href="/" >
                  Comapny
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Contact
                </a>
              </li>
              <li>
                <a href="/">
                
                </a>
              </li>
            </ul>
          </div>
        </div>
      
      </nav>
      <Card />
    </>
  );
}

export default Navbar;
