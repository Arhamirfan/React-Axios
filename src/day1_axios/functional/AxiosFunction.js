import React, { useEffect, useState } from "react";
import axios from "../axios";
import AxiosUser from "./AxiosUser";
import { Link, useNavigate } from "react-router-dom";

export default function AxiosFunction() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/users")
    .then((res) => {
      setMyData(res.data);
    })
    .catch( (err)=>{
        console.log(err);
        setIsError(err);
    } );
  }, []);

  return (
    <>
      <h2>Axios Function</h2>

      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Show Data</td>
          </tr>
        </thead>

        <tbody>
        {isError !== "" && <tr><td><h2>{isError}</h2></td></tr>}
          {myData.map((post) => {
            const {
              id,
              address,
              email,
              name,
              phone,
              username,
              website,
              company,
            } = post;

            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => {
                        navigate(`/post/${post.id}`)
                    }}
                  >
                    Show
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
