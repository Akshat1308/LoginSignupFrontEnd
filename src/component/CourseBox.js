import React from "react";

const CourseBox = ({ Coursename, Duration}) => {
  return (
    <div className="course-box">
      <h3>{Coursename}</h3>
      <p>{Duration}</p>
    </div>
  );
};

export default CourseBox;