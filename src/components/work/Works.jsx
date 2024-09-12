import React, { useEffect, useState } from "react";
import { projects, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {

  const [item, setItem] = useState({name: "All"});
  const [selectProjects, setSelectProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(()=> {
    if(item.name === "All"){
      setSelectProjects(projects);
    }
    else{
      const newProjects = projects.filter((projects) => projects.category === item.name);
      setSelectProjects(newProjects);
    }
  },[item]);

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent});
    setActive(index);
  }

  return (
    <>
      <div className="work_filters">
        {projectsNav.map((item, index) => {
          return (
            <span onClick={(e)=> {handleClick(e, index)}} className={`${active === index ? 'active-work' : ""} work_item`} key={index}>
              {item.name}
            </span>
          );
        })}
      </div>

        <div className="work_container container grid">
            {selectProjects.map((item) => {
                return <WorkItems item={item} key={item.id} />
            })}
        </div>
    </>
  );
};

export default Works;
