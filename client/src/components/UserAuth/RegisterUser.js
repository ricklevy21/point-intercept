//dependencies
import { Input, SubmitBtn } from "../Form";
import React, { useState } from "react";
import {useHistory } from 'react-router-dom'
import API from "../../utils/API";


const RegisterUser = () => {
    const history = useHistory()

    //hook for state of registration info form
    const [registrationFormObject, setRegistrationFormObject] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    })

    //handles updating component state when user types into the input field
    function handleInputChange(event){
        const { name, value } = event.target;
        setRegistrationFormObject({...registrationFormObject, [name]: value})
    };

    //when the form is submitted, use API.registerUser method to save the user data
    //then navigate to the login page
    function handleRegistrationFormSubmit(event) {
        event.preventDefault()
        if(!registrationFormObject.username){
            alert("please provide a username")
        }
        else if (registrationFormObject.password !== registrationFormObject.confirmPassword){
            alert("your passwords do not match")
        }
        else if (!registrationFormObject.password){
            alert("please create and confirm a password")
        }
        else{
            API.registerUser({
                username: registrationFormObject.username,
                password: registrationFormObject.password,
            })
                .then(res => {
                    if (res.data === "this username already exists"){
                        alert(res.data)
                        (history.push('/register'))
                    }else {
                        (history.push('/login'))
                    }
                })                
                .catch(err => console.log(err))
        }

        
    };



    return (
        <>
        <h3>user registration</h3>
        <div className="form-group">
            <label>username</label>
            <Input
            type="username"
            placeholder="create username"
            name="username"
            onChange={handleInputChange}

            />
            <label>password</label>
            <Input
            type="password"
            placeholder ="create password"
            name="password"
            onChange={handleInputChange}
            />
            <label>confirm password</label>
            <Input
            type="password"
            placeholder ="confirm password"
            name="confirmPassword"
            onChange={handleInputChange}
            />
            <SubmitBtn
             onClick={handleRegistrationFormSubmit}

            >
                register
            </SubmitBtn>

        </div>
        </>
    )
}

export default RegisterUser