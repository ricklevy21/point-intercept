//dependencies
import React from 'react'

const RecordData = () => {
    return (
        <>
        <div className="row">
            <div className="col">
                <h5>Transect Name</h5>
            </div>
            <div className="col">
                <h5>Project Name</h5>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <h4>Point: XX.XX</h4>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="form-group">
                    <label for="groundSurface">Ground Surface</label>
                    <input type="text" className="form-control" id="groundSurface" defaultValue="NULL"></input>
                </div>
                <div className="form-group">
                    <label for="soilMoisture">Soil Moisture</label>
                    <input type="text" className="form-control" id="soilMoisture" defaultValue="NULL"></input>
                </div>
                <div className="form-group">
                    <label for="shrubDensity">Shrub Density</label>
                    <input type="text" className="form-control" id="shrubDensity" defaultValue="NULL"></input>
                </div>
                <div className="form-group">
                    <label for="canopyScore">Canopy Score</label>
                    <input type="text" className="form-control" id="canopyScore" defaultValue="NULL"></input>
                </div>
                <div className="form-group">
                    <label for="firstHit">First Hit</label>
                    <input type="text" className="form-control" id="firstHit"></input>
                </div>
                <div className="form-group">
                    <label for="secondHit">Second Hit</label>
                    <input type="text" className="form-control" id="secondHit" defaultValue="NULL"></input>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <button type="button" class="btn btn-dark btn-lg btn-block">End Transect</button>
            </div>
            <div className="col-8">
                <button type="button" class="btn btn-dark btn-lg btn-block">Next Point</button>
            </div>
        </div>
        </>
    )
}

export default RecordData