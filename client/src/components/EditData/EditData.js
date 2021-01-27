//dependencies
import React, { useState, useEffect } from "react";
import {useHistory, useParams } from 'react-router-dom'
import API from "../../utils/API";
import Table from './Table'

const EditProjectData = () => {

    //get _id param (transectID) so that it can be accessed to for displaying data and for adding transect name
    const { _id } = useParams()

    const history = useHistory()

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
            <Table
                id={project._id}
                project={project.project}
            />
        </>
    )
}

export default EditProjectData