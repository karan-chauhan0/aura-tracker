import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import GoogleLogin from './GoogleLogin';
import Dashboard from './Dashboard';
import PageNotFound from './PageNotFound';
import { GoogleOAuthProvider, useGoogleLogin} from "@react-oauth/google";

function App() {

    const GoogleAuthWrapper = ()=>{
        return (
            <GoogleOAuthProvider clientId='792397487512-j3ropkdf986e2n1g1fbed1bbf5u67vu3.apps.googleusercontent.com'>
                <GoogleLogin>
                </GoogleLogin>
            </GoogleOAuthProvider>
        )
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/login" element = {<GoogleAuthWrapper/>}/>
                <Route path = "/" element = {<Navigate to = "/login"/>}/>
                <Route path = "/dashboard" element = {<Dashboard/>}/>
                <Route path = "*" element = {<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
