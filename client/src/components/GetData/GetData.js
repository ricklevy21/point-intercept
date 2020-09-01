import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useParams } from 'react-router-dom'
import ResumeProjectName from '../AddTransect/ResumeProjectName'



const GetData = () => {

    const { _id } = useParams()

    //setting component's initial state
    //hook for state where project title is displayed
    const [project, setProject] =useState([])


    //display the project title once the component mounts
    useEffect(() => {
        //GET Method for pulling project name
        API.getProjectByID(_id)
        .then(res => {
            setProject(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <>
            <ResumeProjectName
                id={project._id}
                project={project.project}
            />
        </>
    )


}

export default GetData