import React from "react";
import { ProjectListItem } from "./ProjectListItem"

const ProjectTable = (projects) => {

    return (
        <table className="table">
            <tbody>
                <tr>
                    <ProjectListItem
                    projects={projects}
                    />
                </tr>
            </tbody>
        </table>
    )
}

export default ProjectTable