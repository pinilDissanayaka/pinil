import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work_card" key={item.id}>
      <img src={item.image} alt="" className="work_img" />
      <h3 className="work_title">{item.title}</h3>
      <div className="links">
        <a href={item.github} className="work_button">
          View on GitHub<i className="bx bxl-github work_button-icon"></i>{" "}
        </a>

        {item.demo !== "" ? (
          <a href={item.demo} className="work_button">
            Demo<i className="bx bx-right-arrow-alt work_button-icon"></i>{" "}
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default WorkItems;
