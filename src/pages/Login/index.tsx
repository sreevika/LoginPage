import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

import "./login-style.css";
//import "../assets/images/petsmart-logo.png"
import petsmartImg from '../../assets/images/petsmart-logo.png';
import fedExImg from '../../assets/images/fedEXMain.jpg';
import {verifyLogin } from '../../api/login';



export default function LoginPage() {
    
  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div className="card card0 border-0">
        <div className="row d-flex">
        <div className="col-lg-6">
                <form noValidate >
                <div className="card2 card border-0 px-4 py-5">
                    <div className="row mb-4 px-3">
                      
                    <img src={petsmartImg} height="20%" width="20%"/> &nbsp;  | &nbsp;  <img src={petsmartImg}  height="20%" width="20%"/>
                    
                      
                    </div>
                    <div className="row px-3 mb-4">
                       
                        <label className="text-center1">SHIPMENT TRACKING</label>
                        
                    </div>
                    <div className="row px-3">
                        <label className="mb-1"><h6 className="mb-0 text-sm">Email Address</h6></label>
                        <input className="mb-4" type="text" name="username" placeholder="Enter a valid email address"/>
                    </div>
                    <div className="row px-3">
                        <label className="mb-1"><h6 className="mb-0 text-sm">Password</h6></label>
                        <input type="password" name="password" placeholder="Enter password"/>
                    </div>
                    <div className="row px-3 mb-4">
                        <div className="custom-control custom-checkbox custom-control-inline">
                            <input id="chk1" type="checkbox" name="chk" className="custom-control-input"/> 
                            <label className="custom-control-label text-sm">Remember me</label>
                        </div>
                       
                    </div>
                    <div className="row mb-3 px-3">
                        <button type="button" className="btn btn-blue text-center" onClick={verifyLogin}>Login</button>
                    </div>
                    
                </div>
                </form>
            </div>
            <div className="col-lg-6">
                <div className="card1 pb-5">
                    {/* <div className="row">
                        <img src="https://i.imgur.com/CXQmsmF.png" className="logo"/>
                    </div> */}
                    <br></br>
                    <br></br>
                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                        <img src="https://i.imgur.com/uNGdWHi.png" className="image"/>
                    </div>
                </div>
            </div>
          
        </div>
        <div className="bg-blue py-4">
            <div className="row px-3">
                <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2023. All rights reserved.</small>
                
            </div>
        </div>
    </div>
</div>
  );
}
