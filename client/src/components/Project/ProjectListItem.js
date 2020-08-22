import React from "react";
import { ResumeBtn, ViewDataBtn, ProjectName } from "../../components/ProjectsList";

//GETTING projects.map is not a function error here

export function ProjectListItem({ projects }) {
    console.log(projects)
  return (
      <>
        {projects.map(project => {
            console.log('inside map', project)
            console.log(project._id)
            return(
                <tr key={project._id}>
                    <td>
                        <ProjectName
                           id={project._id}
                           project={project.project}
                         />
                    </td>
                <td>
                    <ResumeBtn
                        id={project._id}
                        project={project.project}
                    />
                </td>
                <td>
                    <ViewDataBtn
                        id={project._id}
                        project={project.project}
                    />
                </td>
                </tr>
            )
        })}
    </>
)}