import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    console.log("Title Clicked", index);
    setActiveIndex(index);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTitleClick(index)} className={`title ${active}`}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="ui styled accordion">
        <h4>{renderedItems}</h4>
      </div>
      <h1>Clicked: {activeIndex}</h1>
    </>
  );
};

export default Accordion;
