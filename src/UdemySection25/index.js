import React, { useState } from "react";
import Modal from "./model";
const Portalindex = () => {
  const [openModal, setOpenModal] = useState(false);

  const actions = (
    <>
      <button className="ui button negative"> Delete</button>
      <button
        onClick={() => {
          setOpenModal(false);
        }}
        className="ui button "
      >
        Cancel
      </button>
    </>
  );

  return (
    <div className="container">
      <h1>Portal section</h1>

      <button
        className="btn btn-primary"
        onClick={(e) => {
          setOpenModal(true);
        }}
      >
        Modal
      </button>

      {openModal === true ? (
        <Modal
          title="wtf? delete it!"
          content="are you sure?"
          action={actions}
          ondismiss={() => {
            setOpenModal(false);
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Portalindex;
