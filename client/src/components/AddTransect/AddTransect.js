//dependencies
import { GPSbtn } from "./GPSbtn"
import { Input, SubmitBtn } from "../../components/Form";
import React, { useState } from "react";
import API from "../../utils/API";




const AddTransect = () => {
    //setting component's initial state
    const [transectFormObject, setTransectFormObject] = useState({
        project: ""
    })

    //handles updating component state when use types into the input field
    function handleInputChange(event){
        const { name, value } = event.target;
        setTransectFormObject({...transectFormObject, [name]: value})
    };

    //when the form is submitted, use API.addTransect method to save the project data
    //then navigate to the projects page and load all of the projects
    function handleTransectFormSubmit(event) {
        event.preventDefault()
        console.log(transectFormObject.project)

            API.addTransect({
                transect: transectFormObject.transect,
                latitude: transectFormObject.latitude,
                longitude: transectFormObject.longitude,
                date: transectFormObject.date,
                crew: transectFormObject.crew
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
                <Input id="transectName" className="form-control" onChange={handleInputChange}></Input>
            </div>



            <div className="form-group">
                <div className="row">
                    <div className="col-5">
                        <Input id="latitude" className="form-control" placeholder="Latitude" onChange={handleInputChange}></Input>
                    </div>
                    <div className="col-5">
                        <Input id="longitude" className="form-control" placeholder="Longitude" onChange={handleInputChange}></Input>
                    </div>
                    <div className="col-2">
                        <GPSbtn />
                    </div>
                </div>
            </div>




            <div className="form-group">
                <label>Date</label>
                <Input id="date" className="form-control" type="date" onChange={handleInputChange}></Input>
            </div>
            <div className="form-group">
                <label>Crew</label>
                <Input id="crew" className="form-control" onChange={handleInputChange}></Input>

            </div>
            <SubmitBtn
            onClick={handleTransectFormSubmit}
            
            >Start</SubmitBtn>
        </form>
        </>
    )
}

export default AddTransect