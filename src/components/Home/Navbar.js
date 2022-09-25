import React from "react";
import arrow from "../../resources/images/9004749_arrow_up_move_direction_icon 1.svg";
function Navbar() {
  return (
    <div className="col-12">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <button
            class="navbar-toggler ms-sm-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link text-uppercase text-dark active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark text-uppercase" href="#">
                  Portfolio
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-uppercase text-dark ">About us</a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-uppercase text-dark ">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-uppercase text-dark ">
                  <img src={arrow} alt="up-arrow" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
