import React from "react";

const CourseBox = ({ Coursename, Duration}) => {
  return (
    <div className="course-box">
      <h3> <span style={{fontWeight:'bold'}}>Course name :</span> {Coursename}</h3>
      <div style={{marginLeft:'30px'}}>
      <p><span style={{fontWeight:'bold'}}>Duration :</span>{Duration}</p>
      </div>
    </div>
  );
};

export default CourseBox;