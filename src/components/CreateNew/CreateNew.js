import React from 'react'

const CreateNew = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label for="project">Project Name</label>
                        <input type="text" className="form-control" id="project" required></input>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-dark btn-lg btn-block">Create</button>
        </>
    )
}

export default CreateNew