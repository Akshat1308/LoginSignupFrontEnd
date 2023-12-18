import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";
// https://jsonplaceholder.typicode.com/users

const fetchCourses = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

export { fetchCourses };