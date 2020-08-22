import React from "react";
import { ResumeBtn, ViewDataBtn, ProjectName } from "../../components/ProjectsList";

//GETTING projects.map is not a function error here

export function ProjectListItem(projects) {
  return (
      <>
      {/* purely for testing firther functionality until I get code below working */}
        <ResumeBtn/>

        {/* {projects.map(project => {
            return(
                <>
                <td>
                    <ProjectName
                        key={project._id}
                        project={project.project}
                    />
                </td>
                <td>
                    <ResumeBtn
                        key={project._id}
                        project={projects.project}
                    />
                </td>
                <td>
                    <ViewDataBtn
                        key={project._id}
                        project={projects.project}
                    />
                </td>
                </>
            )
        })} */}
    </>
)}