import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 1, name: "Angular", duration: "4/5/2021" },
    { id: 2, name: "React", duration: "6/3/2021" }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      {courses.map(course => (
        <div key={course.id} className="card">
          <h4>{course.name}</h4>
          <p>{course.duration}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
