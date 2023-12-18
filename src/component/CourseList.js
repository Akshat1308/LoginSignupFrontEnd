import React from "react";
import CourseBox from "./CourseBox";

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <CourseBox key={index} {...course} />
      ))}
    </div>
  );
};

export default CourseList;