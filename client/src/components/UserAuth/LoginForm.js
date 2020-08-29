//dependencies
import React from 'react'
import { Input, SubmitBtn } from "../Form";
import {useHistory } from 'react-router-dom'

const LoginForm = () => {

    const history = useHistory()

    //function for navigating user to the registration page
    function newReg(){
        history.push('/register')
    }

    return (
        <>
        <h1>sign in</h1>
        <div className="form-group">
            <label>email</label>
            <Input
            type="email"
            placeholder="enter email"
            name="email"
            />
            <label>password</label>
            <Input
            type="password"
            placeholder ="enter password"
            name="password"
            />
            
            <SubmitBtn>
                sign in
            </SubmitBtn>
            <SubmitBtn
            onClick={newReg}
            >
                register
            </SubmitBtn>
        </div>
        </>
    )
}

export default LoginForm