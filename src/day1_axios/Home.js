import React, { Link } from "react";

export default function Home(){

    return(
        <>
            <h2>Home</h2>
{/* 
            <Link to="/axiosclass">Axios Class</Link>
            <Link to="/axiosfunction">Axios Function</Link> */}
            <a href="/axiosfunction">Axios Function</a>
            <br></br><a href="/axiosclass">Axios Class</a>

        </>
    );
}