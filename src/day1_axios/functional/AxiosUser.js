import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";

export default function AxiosUser(props) {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState();
  const param = useParams();
  const {id}= param;
  useEffect(() => {
    axios
      .get("/users/" + param.id)
      .then((res) => {
        console.log(res.status);
        console.log(res.data)
        setMyData(res.data);
      })
      .catch((err) => {
        setIsError(err);
      });
  }, []);

  return (
    <>
      <div>
        <h2>{myData.id}</h2>
        <p>{myData.username}</p>
        
      </div>
    </>
  );
}
