import React, { Component } from 'react'
import Semester from './Semester'
import courseData from '../data/course.json'
import allSubjects from '../data/subjects.json'

class ListSemesters extends Component {

    render() {

        let semesters = courseData[this.props.course] ?? [];

        let semList = semesters.map(semester => {
            const subjects = semester.subjects.map((subjectId => allSubjects[subjectId]))
            return <Semester key={semester.semester} semester={semester.semester} labs={semester.labs} subjects={subjects}/>
        })

        // Exception conditions
        if ( semesters.length === 0 ) semList = <p  className="text-center"> Sorry, course data not available. </p>
        if ( this.props.course === 'select' ) semList = <p className="m-0"> Please select a course. </p>

        return (
            <div className="container my-4">
            <div className="row">
                <div className="col">
                    <div className="card shadow">
                        <div className="card-body">
                            {semList}
                        </div>
                      </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ListSemesters
