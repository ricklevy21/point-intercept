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
        return axios.get("/api/projects/" + projectData, projectData)
    },

    //Create a transect and add it to a project
    //method: POST
    addTransect: function(transectData) {
        return axios.post("/api/transects", transectData)
    },

    getTransectById: function(transectData) {
        return axios.get("/api/transects/" + transectData, transectData)
    },

    //Create a transect and add it to a project
    //method: POST
    addPoint: function(pointData) {
        return axios.post("/api/points", pointData)
    },
    
    //create a new user
    //method: POST
    registerUser: function(regData) {
        return axios.post("/api/register", regData)
    },

    //handle login
    loginUser: function(loginData) {
        return axios.post("/api/login", loginData)
    }
    
}