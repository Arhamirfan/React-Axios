import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../../Model/axios";

export default function AxiosUser() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState();
  const param = useParams();
  const navigate = useNavigate();

  //const {id}= param;
  useEffect(() => {
    axios
      .get("/posts/" + param.id)
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
        setMyData(res.data);
      })
      .catch((err) => {
        setIsError(err);
        console.log(isError);
      });
  }, []);

 
  return (
    <>
      <div className="container" style={{marginTop:200}}>
        <div className="card" >
          <div className="card-body">
            <h5 className="card-title"> {myData.id} . {myData.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">User ID: {myData.userId}</h6>
            <p className="card-text">
            {myData.body}
            </p>
            <a className="card-link" onClick={ ()=>{ navigate(-1) } }>
              Go Back
            </a>
            
          </div>
        </div>
      </div>
    </>
  );
}
