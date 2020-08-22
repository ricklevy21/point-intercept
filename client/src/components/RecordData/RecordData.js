//dependencies
import React, { useState } from "react";
import API from "../../utils/API";
import { Input, SubmitBtn } from "../../components/Form";
import IncrementedPoint from "./IncrementedPoint"


const RecordData = () => {
    //setting component's initial state
    const [pointFormObject, setPointFormObject] = useState({
        point: "",
        goundSurface: "",
        soilMoisture: "",
        shrubDensity: "",
        canopyScore: "",
        firstHit: "",
        secondHit: ""
    })

    //handles updating component state when use types into the input field
    function handleInputChange(event){
        const { name, value } = event.target;
        setPointFormObject({...pointFormObject, [name]: value})
    };

    //when the form is submitted, use API.addPoint method to save the project data
    //then navigate to a new Point Data Record page, with point incremented by 0.25 ---------need to figure this out
    function handlePointFormSubmitNext(event) {
        event.preventDefault()
        console.log(pointFormObject.project)

            API.addPoint({
                point: pointFormObject.point,
                ground_surface: pointFormObject.groundSurface,
                soil_moisture_percentage: pointFormObject.soilMoisture,
                shrub_density: pointFormObject.shrubDensity,
                canopy_score: pointFormObject.canopyScore,
                hit_one: pointFormObject.firstHit,
                hit_two: pointFormObject.secondHit
            })
                .then(() => setPointFormObject({
                    point: "",
                    goundSurface: "",
                    soilMoisture: "",
                    shrubDensity: "",
                    canopyScore: "",
                    firstHit: "",
                    secondHit: ""
                }))
                .then(console.log("Submitted"))
                .catch(err => console.log(err))
        
    };

       //when the form is submitted, use API.addPoint method to save the project data
    //then navigate to the projects page
    function handlePointFormSubmitEnd(event) {
        event.preventDefault()
        console.log(pointFormObject.project)

            API.addPoint({
                point: pointFormObject.point,
                ground_surface: pointFormObject.groundSurface,
                soil_moisture_percentage: pointFormObject.soilMoisture,
                shrub_density: pointFormObject.shrubDensity,
                canopy_score: pointFormObject.canopyScore,
                hit_one: pointFormObject.firstHit,
                hit_two: pointFormObject.secondHit
            })
                .then(() => setPointFormObject({
                    point: "",
                    goundSurface: "",
                    soilMoisture: "",
                    shrubDensity: "",
                    canopyScore: "",
                    firstHit: "",
                    secondHit: ""
                }))
                .then(window.location.href='/projects')
                .catch(err => console.log(err))
        
    };




    return (
        <>
        <div className="row">
            <div className="col">
                {/* this needs to be a component */}
                <h5>Transect Name</h5>
            </div>
            <div className="col">
                {/* this needs to be a component */}
                <h5>Project Name</h5>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="form-inline">
                        <IncrementedPoint
                        name="point"
                        />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="form-group">
                    <label>Ground Surface</label>
                    <Input type="text" name="goundSurface" className="form-control" id="groundSurface" defaultValue="NULL" onChange={handleInputChange}></Input>
                </div>
                <div className="form-group">
                    <label>Soil Moisture</label>
                    <Input type="number" name="soilMoisture" step="0.1" className="form-control" id="soilMoisture" defaultValue="NULL" onChange={handleInputChange}></Input>
                </div>
                <div className="form-group">
                    <label>Shrub Density</label>
                    <Input type="number" name="shrubDensity" className="form-control" id="shrubDensity" defaultValue="NULL" onChange={handleInputChange}></Input>
                </div>
                <div className="form-group">
                    <label>Canopy Score</label>
                    <Input type="number" name="canopyScore" max="96" min="0" className="form-control" id="canopyScore" defaultValue="NULL" onChange={handleInputChange}></Input>
                </div>
                <div className="form-group">
                    <label>First Hit</label>
                    <Input type="text" name="firstHit" className="form-control" id="firstHit" onChange={handleInputChange}></Input>
                </div>
                <div className="form-group">
                    <label>Second Hit</label>
                    <Input type="text" name="secondHit" className="form-control" id="secondHit" defaultValue="NULL" onChange={handleInputChange}></Input>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <SubmitBtn
                    onClick={handlePointFormSubmitEnd}
                >
                    End Transect
                </SubmitBtn>
            </div>
            <div className="col-8">
                <SubmitBtn
                    onClick={handlePointFormSubmitNext}
                >
                    Next Point
                </SubmitBtn>
            </div>
        </div>
        </>
    )
}

export default RecordData