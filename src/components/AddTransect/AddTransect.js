//dependencies
import React from 'react'


const AddTransect = () => {
    //code

    return (
        <>
        <h3>Project Name</h3>
        <form>
            <div className="form-group">
                <label for="transectName">Transect Name</label>
                <input id="transectName" class="form-control" ></input>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col">
                        <label for="latitude">Latitude</label>
                        <input id="latitude" class="form-control" defaultValue="xxx" ></input>
                    </div>
                    <div className="col">
                        <label for="longitude">Longitude</label>
                        <input id="longitude" class="form-control" defaultValue="-xxx" ></input>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label for="date">Date</label>
                <input id="date" class="form-control" type="date"></input>
            </div>
            <div className="form-group">
                <label for="crew">Crew</label>
                    <input id="crew" class="form-control"></input>
                    <button className="btn">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
  <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
</svg>
                    </button>
            </div>
            <button type="button" class="btn btn-dark btn-lg btn-block">Start</button>
        </form>
        </>
    )
}

export default AddTransect