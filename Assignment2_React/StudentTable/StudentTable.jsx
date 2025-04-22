import React from 'react'
import './StudentTable.css'

const StudentTable = (props) => {
  return (
    <div className='student-table-main'>
        <center><h2>Student Marks Table</h2></center>
        <div className="std-table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mathematics</th>
                        <th>Science</th>
                        <th>English</th>
                        <th>Total Marks</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((student, index) => {
                            return (
                                <tr key={index}>
                                    <td>{student.name}</td>
                                    <td>{student.marks.math}</td>
                                    <td>{student.marks.science}</td>
                                    <td>{student.marks.english}</td>
                                    <td>{student.marks.english+student.marks.math+student.marks.science}</td>
                                    <td>{((student.marks.english+student.marks.math+student.marks.science)/3).toFixed(2)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>

  )
}

export default StudentTable