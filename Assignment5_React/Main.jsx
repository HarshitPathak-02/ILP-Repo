import React from "react";
import CourseCard from "./CourseCard";
import Box from "./Box";

const courses = [
  { id: 1, title: "React", instructor: "John", duration: "2 weeks" },
  { id: 2, title: "Node.js Master", instructor: "Jenie", duration: "4 weeks" },
  { id: 3, title: "Python Basics", instructor: "Arica", duration: "6 weeks" },
  { id: 4, title: "Data Structures and Algorithms", instructor: "Boby", duration: "8 weeks" },
  { id: 5, title: "Machine Learning", instructor: "George", duration: "12 weeks" },
  { id: 6, title: "Web Designing", instructor: "Tenuri", duration: "3 weeks" },
];

class Main extends React.Component {
  renderAllCourses = (data) => {
    return data.map((course) => <CourseCard key={course.id} course={course} />);
  };
  render() {
    return (
      <div className="head">
        <h2 style={{textAlign:'center'}}>Total Courses</h2>
        <Box data={courses} render={this.renderAllCourses} />
      </div>
    );
  }
}

export default Main;
