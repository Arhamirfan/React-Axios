import React, { Link } from "react";
import Navigationbar from "../Navigations/Navigation";
export default function Home(){

    return(
        <>
        <Navigationbar />
        <div className="container" style={{marginTop:50}}>
            <h2>Home</h2>
            <p>This project is just for the demostration of training of logicon. Head to following sections:</p>
            <ul>
            <p>day-1</p>
                <li> <a  href="./axiosfunction">
              Axios Function
            </a> </li>
                <li> <a  href="./axiosclass">
              Axios Class
            </a> </li>
            </ul>

            <ul>
            <p>day-2</p>
                <li> <a  href="./redux">
              Redux
            </a> </li>
            </ul>

            
        </div>
            
        </>
    );
}