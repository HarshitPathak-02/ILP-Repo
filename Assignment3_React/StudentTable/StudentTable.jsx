import React from 'react'
import './StudentTable.css'
import Pass from '../Pass/Pass';
import Fail from '../Fail/Fail';

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
                        <th>Pass/Fail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((student, index) => {
                            const totalMarks = student.marks.english + student.marks.math + student.marks.science;
                            const percentage = (totalMarks / 300) * 100;
                            return (
                                <tr key={index}>
                                    <td>{student.name}</td>
                                    <td>{student.marks.math}</td>
                                    <td>{student.marks.science}</td>
                                    <td>{student.marks.english}</td>
                                    <td>{totalMarks}</td>
                                    <td>{percentage.toFixed(2)}</td>
                                    {
                                        totalMarks >=99 ? <td><Pass/></td> : <td><Fail/></td>
                                    }
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