//dependencies
import React from 'react'

///dont think I will need this component

const IncrementedPoint = () => {

    // const pointValue = "pointValue"

    return (
        <>
              <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
                <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-prepend">
                    <div className="input-group-text">Point</div>
                    </div>
                    <input type="text" className="form-control" id="inlineFormInputGroupUsername2"/>
                </div>
        </> 
    )
}

export default IncrementedPoint
