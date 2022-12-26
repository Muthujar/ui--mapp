import React from "react";

export const Navbar = () => {
  return (
    <div>
      <div class="collapse bg-dark" id="navbarToggleExternalContent">
        <div class="bg-dark">
          <p class="text-muted">page1</p>
          <p class="text-muted">page2</p>
          <p class="text-muted">page3</p>
          <p class="text-muted">page4</p>
          <p class="text-muted">page5</p>
          <p class="text-muted">page6</p>
          <p class="text-muted">page7</p>
        </div>
      </div>

      <nav class="navbar d-flex ">
        <div class="container justify-content-between">
          <div className="justify-content-start">
            {" "}
            <img
              alt=""
              src="//capp.nicepage.com/34e28f3ca3d0db4ae81dc8a781902ebadcdd744e/images/default-logo.png"
              className="u-logo-image u-logo-image-1 "
            />
          </div>
          <div className="d-flex">
            <button
              className=" navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              // aria-controls="navbarToggleExternalContent"
              // aria-expanded="false"
              // aria-label="Toggle navigation"
            >
              <p class="navbar-toggler-icon"></p>
            </button>
            <form class="d-flex">
              <input
                className="form-control "
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          {/* <div class="input-group rounded">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </div> */}
        </div>
      </nav>
    </div>
  );
};
