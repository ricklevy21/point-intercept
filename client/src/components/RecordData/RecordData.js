//dependencies
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Input, SubmitBtn } from "../../components/Form";
import {useHistory, useParams } from 'react-router-dom'
import RecordTransectName from "./RecordTransectName"
import { HitInputSelect } from "./HitInputSelect"
import { GroundInputSelect } from "./GroundInputSelect"
import PointInput from "./PointInput"
import HitList from "./HitList"



//get list of values for hit dropdown
// const hitValues = HitValues

const RecordData = () => {

    //get _id param (transectID) so that it can be accessed to for displaying data and for adding t
    const { _id } = useParams()

    const history = useHistory()



    //setting component's initial state
    //hook for initializing hit list
    const [firstHitState, setFirstHit] =useState([])
    const [secondHitState, setSecondHit] =useState([])
    //hook for hit dropdown
    // const [hit, HitDropdown] = Dropdown("First Hit", "", hitValues)
    //hook for state where transect name is displayed
    const [transect, setTransect] =useState([])
    //hook for state of point data form
    const [pointFormObject, setPointFormObject] = useState({
        point: "0",
        groundSurface: "",
        soilMoisture: "",
        shrubDensity: "",
        canopyScore: "",
        firstHit: "",
        secondHit: ""
    })



    //display the transectName once the component mounts
    useEffect(() => {
        setFirstHit(HitList)
        setSecondHit(HitList)
        //GET Method for pulling transect name
        API.getTransectById(_id)
        .then(res => {
            setTransect(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    //handles updating component state when use types into the input field
    function handleInputChange(event){
        const { name, value } = event.target;
        setPointFormObject({...pointFormObject, [name]: value})
        if (name === "firstHit" || name === "secondHit"){
            filterHits(value, name)
        }
    };

    //funciton to filter the hit options
    function filterHits(searchTerm, name){
        //display all species in the list if there is nothing typed in
        if (!searchTerm){
            setFirstHit(firstHitState)
            setSecondHit(secondHitState)
        // if there is a search term typed in, apply the filter
        }else {
            if (name === "firstHit"){
                //apply filter to firstHit hook
                const searchInput = searchTerm.toLowerCase()
                const filtered1 = HitList.filter(HitListResult => HitListResult.value.toLowerCase().startsWith(searchInput))
                setFirstHit(filtered1)
            }
            else {
                const searchInput = searchTerm.toLowerCase()
                const filtered2 = HitList.filter(HitListResult => HitListResult.value.toLowerCase().startsWith(searchInput))
                setSecondHit(filtered2)
            }

        }

    }

    //when the form is submitted, use API.addPoint method to save the project data
    //then navigate to a new Point Data Record page, with point incremented by 0.25 ---------need to figure this out
    function handlePointFormSubmitNext(event) {
        event.preventDefault()
            API.addPoint({
                point: pointFormObject.point,
                ground_surface: pointFormObject.groundSurface,
                soil_moisture_percentage: pointFormObject.soilMoisture,
                shrub_density: pointFormObject.shrubDensity,
                canopy_score: pointFormObject.canopyScore,
                hit_one: pointFormObject.firstHit,//need to figure out what to put here so the values are submitted
                hit_two: pointFormObject.secondHit,//need to figure out what to put here so the values are submitted
                transectID: _id //this is the transect that I am adding the point to
            })
            .then(() => 
            
            {   const newPoint = parseFloat(pointFormObject.point) + 0.25
                
                setPointFormObject({
                point: newPoint,
                groundSurface: "",
                soilMoisture: "",
                shrubDensity: "",
                canopyScore: "",
                firstHit: "",
                secondHit: ""
            })})
                .catch(err => console.log(err))
        
    };


       //when the form is submitted, use API.addPoint method to save the project data
    //then navigate to the projects page
    function handlePointFormSubmitEnd(event) {
        event.preventDefault()

            API.addPoint({
                point: pointFormObject.point,
                ground_surface: pointFormObject.groundSurface,
                soil_moisture_percentage: pointFormObject.soilMoisture,
                shrub_density: pointFormObject.shrubDensity,
                canopy_score: pointFormObject.canopyScore,
                hit_one: pointFormObject.firstHit,//need to figure out what to put here so the values are submitted
                hit_two: pointFormObject.secondHit,//need to figure out what to put here so the values are submitted
                transectID: _id //this is the transect that I am adding the point to
            })
                .then(history.push('/projects'))
                .catch(err => console.log(err))
        
    };






    return (
        <>
        <div className="row">
            <div className="col">
                <RecordTransectName
                    id={transect._id}
                    transect={transect.transect}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-2">
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">Point</div>
                    </div>
                    <PointInput value={pointFormObject.point} type="number" step="0.25" min="0" name="point" id="point" onChange={handleInputChange}></PointInput>

                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="form-group">
                    <label>Ground Surface</label>
                    <GroundInputSelect value={pointFormObject.groundSurface} type="text" name="groundSurface" className="form-control" id="groundSurface" onChange={handleInputChange}></GroundInputSelect>
                </div>
                <div className="form-group">
                    <label>Soil Moisture Percentage</label>
                    <Input value={pointFormObject.soilMoisture} type="number" name="soilMoisture" step="0.1" className="form-control" id="soilMoisture" min="0" onChange={handleInputChange}></Input>
                </div>
                <div className="form-group">
                    <label>Shrub Density</label>
                    <Input value={pointFormObject.shrubDensity} type="number" name="shrubDensity" className="form-control" id="shrubDensity" min="0" onChange={handleInputChange}></Input>
                </div>
                <div className="form-group">
                    <label>Canopy Score (value from densiometer, not %)</label>
                    <Input value={pointFormObject.canopyScore} type="number" name="canopyScore" max="96" min="0" className="form-control" id="canopyScore" onChange={handleInputChange}></Input>
                </div>
                <div className="form-group">
                    <label>First Hit</label>
                    <HitInputSelect
                    value={pointFormObject.firstHit}
                    name="firstHit"
                    className="form-control"
                    id="firstHit"
                    onChange={handleInputChange}
                    filteredOptions={firstHitState}
                    ></HitInputSelect>
                </div>
                <div className="form-group">
                    <label>Second Hit</label>
                    <HitInputSelect
                    value={pointFormObject.secondHit}
                    name="secondHit"
                    className="form-control"
                    id="secondHit"
                    onChange={handleInputChange}
                    filteredOptions={secondHitState}
                    ></HitInputSelect>
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