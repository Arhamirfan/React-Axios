import React, { useState } from "react";
import Modal from "../UdemySection25";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "Title",
    content: "Description",
  },
  {
    title: "what is react",
    content: "This is unidirectional shit",
  },
  {
    title: "Why are you learning",
    content: "Keera ha",
  },
];
export default function USapp() {
  return (
    <>
      <div className="ui container">
        <br />
        <Accordion items={items} />
      </div>
    </>
  );
}
