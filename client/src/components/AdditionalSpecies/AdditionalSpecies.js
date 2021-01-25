//dependencies
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { SubmitBtn } from "../../components/Form";
import {useHistory, useParams } from 'react-router-dom'
import RecordTransectName from "../RecordData/RecordTransectName"
import { HitInputSelect } from "../RecordData/HitInputSelect"

const AdditionalSpecies = () => {

        //get _id param (transectID) so that it can be accessed to for displaying data and for adding transect name
        const { _id } = useParams()

        const history = useHistory()

        //hook for state where transect name is displayed
        const [transect, setTransect] =useState([])

        //use the species list for the dropdowns and display the transectName on the page once the component mounts 
        useEffect(() => {
            //GET Method for pulling transect name
            API.getTransectById(_id)
            .then(res => {
                setTransect(res.data)
            })
            .catch(err => console.log(err))
        }, [])        

        return(
            <>
            <div className="row">
                <div className="col">
                    <RecordTransectName
                        id={transect._id}
                        transect={transect.transect}
                    />
                </div>
            </div>


            <h4>add additional species within 1m of transect</h4>
            </>
        )
}

export default AdditionalSpecies