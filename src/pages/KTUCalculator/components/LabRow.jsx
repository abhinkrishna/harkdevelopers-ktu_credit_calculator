import React, {useState} from 'react'

function LabRow({ maxLabCredit }) {

    const [credit, setCredit] = useState(0);

    const setValue = (event) => {
        setCredit(Number(event.target.value));
    }

    const setDefaultCredit = () => {
        setCredit(maxLabCredit);
    }
    
    const options = [];
    for (let index = 0; index < maxLabCredit + 1; index++) {
        options.push( <option key={index} value={index}> {index} </option> );
    }

    const bgColor = (credit === maxLabCredit) ? "selected" : ""

    return (
        <tr className={`${bgColor}`}>
            <td colSpan="2" className="text-start"> Credits from Labs + Workshops [ Mostly {maxLabCredit} ] </td>
            <td> 
                <div className="d-grid gap-1">
                    <button className="btn btn-block btn-primary" onClick={setDefaultCredit}> Completed </button> 
                </div>
            </td>
            <td> <select className="form-select" value={credit} onChange={setValue}> {options} </select> </td>
        </tr>
    )
}

export default LabRow
