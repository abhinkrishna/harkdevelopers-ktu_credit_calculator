import React, { Component } from 'react'

export class SelectCourse extends Component {

    handleChange = (event) => {
        this.props.callback(event.target.value)
    }
    
    render() {

        var courseOptions = this.props.courses.map((course) => <option key={course.id} value={course.id}> {course.name} </option>)

        return (
            <div className="container my-4">
                <div className="row">
                    <div className="col">
                        <div className="card shadow primary-bg">
                            <div className="card-body">
                                <h4>Select your course</h4>
                                <select name="course" id="selected-course" className="form-select" onChange={this.handleChange} value={this.props.selected}>
                                    <option value="select"> Select Course </option>
                                    {courseOptions}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectCourse
