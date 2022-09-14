import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./Store/actions";
const ReduxApp = () => {
  const [num, setNum] = useState(0);
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container text-center" style={{ marginTop: 100 }}>
        <h2>Increment Decrement</h2>
        <h4>React Redux</h4>

        <div className="d-flex justify-content-center">
          <div className="col-2">
            <div className="input-group">
              <div className="input-group-prepend">
                <button
                  onClick={() => {
                    dispatch(decNumber());
                  }}
                  className="btn btn-outline-primary"
                  type="button"
                >
                  -
                </button>
              </div>
              <input
                value={myState}
                onChange={(e) => setNum(e.target.value)}
                style={{ marginLeft: 5, marginRight: 5 }}
                type="text"
                name="quantity"
                className="form-control"
              />
              <div className="input-group-prepend">
                <button
                  onClick={() => {
                    dispatch(incNumber(2));
                  }}
                  className="btn btn-outline-primary"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReduxApp;
