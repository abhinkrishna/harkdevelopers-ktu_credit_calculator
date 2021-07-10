import React, { Component } from 'react'
import SelectCourse from './components/SelectCourse'
import './style.css'
import availableCourses from './data/availableCourses.json'
import ListSemesters from './components/ListSemesters'
// import Result from './components/Result'
// import HowToUse from './components/HowToUse'

class KTUCalculator extends Component {

    constructor(props) {
        super(props)
        this.state = {
             course: 'select',
        }
    }

    setCourse = (course) => this.setState({ course })

    render() {
        return (
            <div>
                <SelectCourse selected={this.state.course} courses={availableCourses} callback={this.setCourse}/>
                {/* <HowToUse/> */}
                <ListSemesters course={this.state.course}/>
                {/* <Result/> */}
            </div>
        )
    }
}

export default KTUCalculator
