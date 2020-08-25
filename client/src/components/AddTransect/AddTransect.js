//dependencies
import { GPSbtn } from "./GPSbtn"
import { Input, SubmitBtn } from "../../components/Form";
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useParams } from 'react-router-dom'

const AddTransect = () => {

    //get _id param so that it can be passed to the add transect page
    const { _id } = useParams()

    //setting component's initial state
    //hook for state where project title is displayed
    const [project, setProject] =useState([])
    //hook for state of transect info form
    const [transectFormObject, setTransectFormObject] = useState({
        transect: "",
        latitude: "",
        longitude: "",
        date: "",
        crew: "",
    })

    //display the project title once the component mounts--------------------------!!!!!--not working route issues
    useEffect(() => {
        //GET Method for pulling project name
        API.getProjectByID(_id)
        .then(res => {
            setProject(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    //handles updating component state when use types into the input field
    function handleInputChange(event){
        const { name, value } = event.target;
        setTransectFormObject({...transectFormObject, [name]: value})
    };

    //when the form is submitted, use API.addTransect method to save the project data
    //then navigate to the projects page and load all of the projects
    function handleTransectFormSubmit(event) {
        event.preventDefault()
            API.addTransect({
                transect: transectFormObject.transect,
                latitude: transectFormObject.latitude,
                longitude: transectFormObject.longitude,
                date: transectFormObject.date,
                crew: transectFormObject.crew,
                projectID: _id
            })
                .then(() => setTransectFormObject({
                    transect: "",
                    latitude: "",
                    longitude: "",
                    date: "",
                    crew: ""
                }))
                .catch(err => console.log(err))
        
    };

    return (
        <>
        <h3>Project Name</h3>
        <form>
            <div className="form-group">
                <label>Transect Name</label>
                <Input name="transect" id="transect" className="form-control" onChange={handleInputChange}></Input>
            </div>



            <div className="form-group">
                <div className="row">
                    <div className="col-5">
                        <Input id="latitude" name="latitude" value={transectFormObject.latitude} className="form-control" placeholder="Latitude" onChange={handleInputChange}></Input>
                    </div>
                    <div className="col-5">
                        <Input id="longitude" name="longitude" value={transectFormObject.longitude}  className="form-control" placeholder="Longitude" onChange={handleInputChange}></Input>
                    </div>
                    <div className="col-2">
                        <GPSbtn
                            setGPS={setTransectFormObject}
                            stateGPS={transectFormObject}
                        />
                    </div>
                </div>
            </div>




            <div className="form-group">
                <label>Date</label>
                <Input id="date" name="date" className="form-control" type="date" onChange={handleInputChange}></Input>
            </div>
            <div className="form-group">
                <label>Crew</label>
                <Input id="crew" name="crew" className="form-control" onChange={handleInputChange}></Input>

            </div>
            <SubmitBtn
            onClick={handleTransectFormSubmit}
            
            >Start</SubmitBtn>
        </form>
        </>
    )
}

export default AddTransect