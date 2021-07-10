import React, { Component } from 'react'

export class SubjectRow extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
             isActive: false
        }
    }

    toggleIsActive = () => {
        const { subject } = this.props;
        this.setState((state) => {
            const isActive = !this.state.isActive;
            if (isActive)
                this.props.onChange(subject.credit);
            else
                this.props.onChange(-subject.credit);
            return { isActive: isActive }
        })
        
    }
    
    render() {

        const { index, subject } = this.props; 
        const bgColor = this.state.isActive ? "selected" : ""
        const icon = this.state.isActive ? <i className="bi bi-check2"></i> : <i className="bi bi-dash"></i>

        return (
            <tr key={`${subject.id}${index}`} className={`pointer ${bgColor}`} onClick={this.toggleIsActive}>
                <td>{index + 1}</td>
                <td className="text-start">{subject.name} - {subject.id}</td>
                <td>{subject.credit}</td>
                <td> {icon} </td>
            </tr>
        )
    }
}

export default SubjectRow
