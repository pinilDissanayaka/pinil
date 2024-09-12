import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="bx bx-award about_icon"></i>
        <h3 className="about_title">Undergraduate</h3>
        <span className="about_subtitle">3rd year</span>
      </div>

      <div className="about_box">
        <i class="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">100+ projects</span>
      </div>

      <div className="about_box">
        <i class="bx bx-support about_icon"></i>
        <h3 className="about_title">Contact</h3>
        <span className="about_subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
