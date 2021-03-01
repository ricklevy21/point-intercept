//dependencies
import React, { useEffect, useState } from "react";
import API from "../utils/API";
import ProjectTable from '../components/Project/ProjectTable'
import { withAuthenticationRequired } from "@auth0/auth0-react";


const Projects = () => {

        //Setting component's initial state
        const [projects, setProjects] = useState()

        //Load all of the projects and store them with setProjects
        useEffect(() => {
            loadProjects()
        }, [])
        
        //Loads all projects and sets them to projects
        function loadProjects(){
            API.getProjects()
                .then(res => {
                    //set state for page display
                    setProjects(res.data)

                    //open indexedDB
                    const request = window.indexedDB.open("point-intercept", 1);
                    //create schema for indexedDB
                    request.onupgradeneeded = event => {
                        const db = event.target.result;
                        //create object store for projects with a projectID keypath that can be used to query on
                        const projectsStore = db.createObjectStore("projects", {keyPath: "_id"});
                    }
                    //send the project data to the indexedDB database
                    request.onsuccess = () => {
                        const db = request.result
                        const transaction = db.transaction(["projects"], "readwrite")
                        const projectsStore = transaction.objectStore("projects")        
                        const projectData = res.data
                        console.log(projectData)
                        projectData.map(projectDatum => projectsStore.put({ _id: projectDatum._id, project: projectDatum.project}))
                    }
                    if (navigator.onLine){
                        console.log("You are connected, project data will be submitted to the browser's database")   
                    } else{
                        console.log("You are offline, data cannot be accessed from the server's database")
                    }
                })
                .catch(err => console.log(err))
        }

    return (
        <>
        <div className="row">
            <div className="col s12">
                <h1>projects</h1>
                </div>
        </div>
        <div className="row">
            <div className="col s12">
                {projects ?
                <ProjectTable
                projects={projects}
                /> 
                : ""}
            </div>
        </div>
        </>
    )
}

export default withAuthenticationRequired(Projects)