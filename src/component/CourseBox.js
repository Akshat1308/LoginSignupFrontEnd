import React from "react";

const CourseBox = ({ title, duration }) => {
  return (
    <div className="course-box">
      <h3>{title}</h3>
      <p>{duration}</p>
    </div>
  );
};

export default CourseBox;