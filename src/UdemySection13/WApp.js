import React, { useState } from "react";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";

const options = [
  {
    label: "The color Red",
    value: "Red",
  },
  {
    label: "The color Green",
    value: "Green",
  },
  {
    label: "The color Yellow",
    value: "Yellow",
  },
];

export default function WApp() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <>
      <div className="ui container">
        <br />
        <Search />
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </div>
    </>
  );
}
