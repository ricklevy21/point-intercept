import React from 'react'

const ProjectTable = () => {
    return (
        <table className="table">
            <tbody>
                <tr>
                    <td>Project Name</td>
                    <td><button className="btn btn-dark">Resume Project</button></td>
                    <td><button className="btn btn-dark">View Project Data</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default ProjectTable