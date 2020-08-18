//dependencies
import React from 'react'
import ProjectTable from '../components/Project/ProjectTable'

const Projects = () => {
    return (
        <>
        <div className="row">
            <div className="col s12">
                <h1>projects</h1>
                </div>
        </div>
        <div className="row">
            <div className="col s12">
                <ProjectTable />
            </div>
        </div>
        </>
    )
}

export default Projects