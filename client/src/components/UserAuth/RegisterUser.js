//dependencies
import { Input, SubmitBtn } from "../Form";
import React, { useState, useEffect } from "react";


const RegisterUser = () => {

    //hook for state of registration info form
    const [transectFormObject, setTransectFormObject] = useState({
        email: "",
        password: ""
    })



    return (
        <>
        <h3>user registration</h3>
        <div className="form-group">
            <label>email/username</label>
            <Input
            type="email"
            placeholder="enter email"
            />
            <label>password</label>
            <Input
            type="password"
            placeholder ="create password"
            />
            <SubmitBtn
            >
                Register
            </SubmitBtn>

        </div>
        </>
    )
}

export default RegisterUser