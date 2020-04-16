import React from 'react';

function Details(props)
{
  const student=props.students.map(s=>
  <tr key={s.id}>
    <td>{s.studentId}</td>
    <td>{s.studentName}</td>
    <td>{s.studentMarks}</td>
  </tr>
  )
  return (
    <div>
      <table border="1" style={{textAlign:"center"}}>
        <thead>
          <tr>
            <td>Student ID</td>
            <td>Student Name</td>
            <td>Student Marks</td>
          </tr>
        </thead>
        <tbody>
          {student}
        </tbody>
      </table>
    </div>
  )
}
export default Details;