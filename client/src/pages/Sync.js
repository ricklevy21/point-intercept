//dependencies
import React from 'react'
import SyncBtn from '../components/Sync/SyncBtn'
import { withAuthenticationRequired } from "@auth0/auth0-react";


const Sync = () => {
    //open indexedDB to create stores fro offline data
    const request = window.indexedDB.open("point-intercept", 1);
    //create schema for indexedDB

    return (
        <>
        <h6>Data recorded while offline is cached in the browser. Once back online, click the button below to send data to the databse and clear the browser's cache.</h6>
        <br></br>
        <SyncBtn />
        </>
    )
}

export default withAuthenticationRequired(Sync)