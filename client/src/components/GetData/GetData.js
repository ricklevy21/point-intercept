import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useParams } from 'react-router-dom'
import ResumeProjectName from '../AddTransect/ResumeProjectName'
import { CSVLink } from "react-csv";


const GetData = () => {

    const { _id } = useParams()
    

    //setting component's initial state
    //hook for state where project title is displayed
    const [project, setProject] =useState([])
    //hook for state of data to be downloaded as csv
    const [data, setData] = useState([])


    //display the project title once the component mounts
    useEffect(() => {
        //GET Method for pulling project name
        API.getProjectByID(_id)
            .then(res => {
                setProject(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    //run the function that calls tha API and creates the formatted data
    useEffect(() => {
        API.getProjectData(_id)
            .then(res => {
                // console.log(res.data.transects)
                let csvData = []
                let transects = res.data.transects
                transects.forEach(function(transect) {
                    for (var j = 0; j < transect.points.length; j++){
                        var arr = []
                        arr.push(transect.transect)
                        arr.push(transect.date)
                        arr.push(transect.latitude)
                        arr.push(transect.longitude)
                        arr.push(transect.points[j].point)
                        arr.push(transect.points[j].ground_surface)
                        arr.push(transect.points[j].soil_moisture_percentage)
                        arr.push(transect.points[j].hit_one)
                        arr.push(transect.points[j].hit_two)
                        arr.push(transect.points[j].shrub_density)
                        arr.push(transect.points[j].canopy_score)
                        csvData.push(arr)
                    }
                })
                console.log(csvData)
                setData(csvData)
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <>
            <ResumeProjectName
                id={project._id}
                project={project.project}
            />


            <CSVLink data={data}>Download me</CSVLink>
        </>
    )


}

export default GetData