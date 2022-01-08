import React from "react";
import './Accordion.css';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
const Accordion = ({ items }) => {
  const [activeIndex,setActiveIndex] = React.useState(null);
  const onTitleClick = (index) => {
    setActiveIndex(index);
  }
  const renderedItems = items.map((item,index) => {
    let active;
    let show;
    let hide;
    let bold;
    if(index === activeIndex){
      active = 'active';
      show = 'show';
      hide = 'hide';
      bold = 'bold';
    }
    else
    {
      active = '';
      show = '';
    }
    return (
      <React.Fragment key={item.id}>
        <div className={"container"} onClick={() => onTitleClick(index)}>
          <h4 className={`${bold}`}>{item.title}</h4>
          <FaAngleDown className={`arrow-down ${hide}`} />
          <FaAngleUp className={`arrow-up ${show}`} />
          <p className={`content  ${active}`}>{item.content}</p>
          <hr />
        </div>
      </React.Fragment>
    );
  });
  return <div>
    <h1 className="title">FAQ</h1>
    {renderedItems}
    </div>;
};

export default Accordion;
