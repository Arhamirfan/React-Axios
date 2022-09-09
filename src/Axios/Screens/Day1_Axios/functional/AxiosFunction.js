import React, { useEffect, useState } from "react";
import axios from "../../../Model/axios";
import { Link, useNavigate } from "react-router-dom";

export default function AxiosFunction() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        setMyData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsError(err);
      });
  }, []);

  const deleteUser = async (id) => {
    axios
      .delete(`/posts/${id}`)
      .then((res) => {
        console.log(
          "🚀 ~ file: AxiosFunction.js ~ line 23 ~ axios.delete ~ res",
          res
        );
      })
      .catch((err) => {});
  };

  return (
    <>
      <div className="container" style={{ marginTop: 50 }}>
        <h2>Axios Function</h2>
        <Link to="/newuser">
          <button className="btn btn-primary">Add a User</button>
        </Link>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col">Show Data</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>

          <tbody>
            {isError !== "" && (
              <tr>
                <td>
                  <h2>{isError}</h2>
                </td>
              </tr>
            )}
            {myData.map((post) => {
              const { userId, id, title, body } = post;

              return (
                <tr key={id}>
                  <td>{userId}</td>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{body}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        navigate(`/post/${post.id}`);
                      }}
                    >
                      Show
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteUser(id);
                      }}
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
