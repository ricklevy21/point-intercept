import axios from 'axios'

export default {

    //Create and add a new Project
    //method: POST
    addProject: function(projectData) {
        return axios.post("/api/projects", projectData);
    },

    //View all projects
    //method: Get
    getProjects: function(projectData) {
        return axios.get("/api/projects", projectData)
    },

    //Get one project by _id
    //method: GET
    getProjectByID: function(projectData){
        return axios.get("api/projects/:id", projectData)
    },

    //Create a transect and add it to a project
    //method: POST
    addTransect: function(transectData) {
        return axios.post("/api/transects", transectData)
    },

    //Create a transect and add it to a project
    //method: POST
    addPoint: function(pointData) {
        return axios.post("/api/points", pointData)
    }
}