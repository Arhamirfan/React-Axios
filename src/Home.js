import React, { Link } from "react";
import Navigationbar from "./Common/Navigation";
export default function Home() {
  return (
    <>
      <Navigationbar />
      <div className="container" style={{ marginTop: 50 }}>
        <h2>Home</h2>
        <p>
          This project is just for the demostration of training of logicon. Head
          to following sections:
        </p>
        <ul>
          <p>day-1</p>
          <li>
            {" "}
            <a href="./axiosfunction">Axios Function</a>{" "}
          </li>
          <li>
            {" "}
            <a href="./axiosclass">Axios Class</a>{" "}
          </li>
        </ul>

        <ul>
          <p>day-2</p>
          <li>
            {" "}
            <a href="./redux">Redux</a>{" "}
          </li>
        </ul>

        <ul>
          <p>day-3</p>
          <li>
            {" "}
            <a href="./uapp">Udemy</a>{" "}
          </li>
        </ul>

        <ul>
          <p>day-4</p>
          <li>
            {" "}
            <a href="./usapp">Udemy section-12 Hooks</a>{" "}
          </li>
        </ul>

        <ul>
          <p>day-5</p>
          <li>
            {" "}
            <a href="./wikipedia">Udemy section-13 Wikipedia</a>{" "}
          </li>
        </ul>
      </div>
    </>
  );
}
