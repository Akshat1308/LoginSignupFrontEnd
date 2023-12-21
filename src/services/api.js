import axios from "axios";

const API_URL = "https://cute-flannel-nightgown-deer.cyclic.app/api/v1/course";
// https://jsonplaceholder.typicode.com/users

const fetchCourses = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response)
    return response.data.dataRecieved;

  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

export { fetchCourses };