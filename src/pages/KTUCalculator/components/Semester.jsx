import React, { Component } from 'react'
import LabRow from './LabRow'
import SubjectRow from './SubjectRow'

class Semester extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            semester: this.props.semester,
            credits: 0,
            maxCredit: this.props.subjects.reduce((credits, subject) =>  credits + subject.credit, 0) + (this.props.labs ?? 0),
        }
    }

    handleSelection = (credit) => {
        this.setState({credits: this.state.credits + Number(credit)})
    }

    render() {

        const { labs, subjects } = this.props;

        const subjectList = subjects.map((subject, index) => {
            return <SubjectRow key={`${subject.id}${index}`} index={index} subject={subject} onChange={this.handleSelection}/>
        })

        if ( labs ) subjectList.push(<LabRow key={`lab-s${this.state.semester}`} maxLabCredit={labs}/>)  

        return (
            <div>
                <div className="row">
                    <div className="col">
                        <h4>S{this.props.semester}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-hover table-bordered text-center">
                            <thead>
                                <tr className="text-center">
                                    <th width="7%">No</th>
                                    <th width="63%">Subject</th>
                                    <th width="15%">Credit</th>
                                    <th width="15%">Passed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subjectList}
                            </tbody>
                            <tfoot>
                                <tr className="text-center">
                                    <th colSpan="2" className="text-start">Total Credits</th>
                                    <td> {this.state.maxCredit} </td>
                                    <td> <b>{this.state.credits}</b> </td>
                                </tr>
                            </tfoot> 
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Semester
