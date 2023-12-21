import React, { useState, useEffect } from "react";
import CourseList from "../component/CourseList";
import { fetchCourses } from "../services/api";
import './courses.css'
import { Link } from 'react-router-dom'


function ThirdPage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCourses();
            setCourses(data);
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="navbar">
                <div className="left">
                    <div className="search-bar">
                        {/* Add your search bar component here */}
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="middle">
                    <div className="logo">FreeCodeCamp</div>
                </div>
                <div className="right">
                    <Link to="/logout">
                        <button className="sign-in">Logout</button>
                    </Link>
                </div>
            </div>
            <div className="app">
                <h1>Welcome to freeCodeCamp.org</h1>
                <blockquote>
                    <p>"I have not failed. I've just found 10,000 ways that won't work."</p>
                    <footer>- Thomas A. Edison</footer>
                </blockquote>
                <CourseList courses={courses} />
            </div>
        </>
    );
};

export default ThirdPage