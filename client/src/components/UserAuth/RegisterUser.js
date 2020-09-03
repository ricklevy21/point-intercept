//dependencies
import { Input, SubmitBtn } from "../Form";
import React, { useState } from "react";
import {useHistory } from 'react-router-dom'
import API from "../../utils/API";


const RegisterUser = () => {
    const history = useHistory()

    //hook for state of registration info form
    const [registrationFormObject, setRegistrationFormObject] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
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
        else if (registrationFormObject.password !== registrationFormObject.password2){
            alert("your passwords do not match")
        }
        else if (!registrationFormObject.password){
            alert("please create and confirm a password")
        }
        else{
            API.registerUser({
                name: registrationFormObject.name,
                email: registrationFormObject.email,
                password: registrationFormObject.password,
                password2: registrationFormObject.password2

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
            <label>name</label>
            <Input
            type="text"
            placeholder="enter name"
            name="name"
            onChange={handleInputChange}
            />

            <label>email</label>
            <Input
            type="email"
            placeholder="enter email"
            name="email"
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
            name="password2"
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