import React from "react";

export default function Navigationbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Logicon Training
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a
              class="nav-link active"
              aria-current="page"
              href="./axiosfunction"
            >
              Home
            </a>
            <a class="nav-link " aria-current="page" href="./axiosfunction">
              Axios Function
            </a>
            <a class="nav-link" href="./axiosclass">
              Axios Class
            </a>
            <a class="nav-link" href="./redux">
              Redux
            </a>
            <a class="nav-link" href="./uapp">
              Udemy
            </a>
            <a class="nav-link" href="./usapp">
              Udemy section 11
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
