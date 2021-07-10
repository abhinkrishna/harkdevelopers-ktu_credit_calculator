import React from 'react'

function Result() {
    return (
        <div className="container my-4">
        <div className="row">
            <div className="col">
                <div className="card shadow">
                    <div className="card-body">
                        <table className="table table-bordered text-center">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>1 <sup>st</sup> year </th>
                                    <th>2 <sup>nd</sup> year </th>
                                    <th>3 <sup>rd</sup> year </th>
                                    <th>4 <sup>th</sup> year </th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cum. Credits</td>
                                    <td>47</td>
                                    <td>95</td>
                                    <td>141</td>
                                    <td>181</td>
                                    <td> <b>181</b> </td>
                                </tr>
                                <tr>
                                    <td>Completed subs</td>
                                    <td>6+6</td>
                                    <td>6+6</td>
                                    <td>7+7</td>
                                    <td>7+5</td>
                                    <td> <b>50 / 50</b> </td>
                                </tr>
                                <tr>
                                    <td>To be completed</td>
                                    <td>0+0</td>
                                    <td>0+0</td>
                                    <td>0+0</td>
                                    <td>0+0</td>
                                    <td> <b>0 / 50</b> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Result
