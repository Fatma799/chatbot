import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ForgetPassImage from "../assets/light-mode/forgetPass-img.svg";
import IconBack from "../assets/light-mode/back-icon.svg";
import "./ForgetPassword.css";

const ForgetPassword = () => {
    const [method, setMethod] = useState("phone");
    const [country, setCountry] = useState("US");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSend = (event) => {
        event.preventDefault();
        if (method === "email" && !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            alert("Please enter a valid email address.");
            return;
        }

        const data = method === "phone" ? phone : email;
        navigate("/Verification", { state: { contact: data } });
    };

    return (
        <div className="style-page d-flex justify-content-center align-items-center vh-100">
            <div className="container-fluid">
                <div className="row d-flex align-items-center justify-content-center">
                    {/* Left Section */}
                    <div className="col-lg-5 col-md-6 col-sm-12 text-start text-md-start px-4">
                        <img 
                            src={IconBack} 
                            alt="back" 
                            className="back-img mb-3" 
                            onClick={() => navigate("/Login")} 
                            style={{ cursor: "pointer"}} 
                        />
                        <h2 className="text-title">Forget Password</h2>
                        <p className="text-paragraph">
                            Please enter your email address to receive a verification code.
                        </p>

                        {/* Tabs */}
                        <div className="d-flex mb-3 justify-content-center justify-content-md-start">
                            <button 
                                className={`w-50 btn btn-link tab-button text-decoration-none ${method === "email" ? "active-tab" : ""}`}
                                onClick={() => setMethod("email")}
                            >By Email</button>
                            <button 
                                className={`w-50 btn btn-link tab-button text-decoration-none ${method === "phone" ? "active-tab" : ""}`}
                                onClick={() => setMethod("phone")}
                            >By Phone</button>
                        </div>

                        {/* Input Fields */}
                        <form className="w-100">
                            {method === "phone" ? (
                                <div className="input-group border rounded-2 p-2 d-flex align-items-center">
                                    <select 
                                        className="border-0 bg-transparent" 
                                        value={country} 
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                        <option value="US">US</option>
                                        <option value="UK">UK</option>
                                        <option value="FR">FR</option>
                                    </select>
                                    <input 
                                        type="text" 
                                        className="form-control phone-input border-0 bg-transparent" 
                                        placeholder="+1 (555) 000-0000" 
                                        value={phone} 
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            ) : (
                                <input 
                                    type="email"
                                    className="email-input form-control border rounded-2 p-2 mb-3"
                                    placeholder="you@company.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            )}

                            <button 
                                type="button" 
                                className="btn btn-primary w-100 py-2 mt-3 btn-send" 
                                onClick={handleSend}
                            >
                                Send
                            </button>
                        </form>

                        {/* Dots Indicator */}
                        <div className="d-flex justify-content-center mt-4">
                            <span className="dot active mx-1"></span>
                            <span className="dot mx-1"></span>
                            <span className="dot mx-1"></span>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-lg-5 col-md-6 d-none d-md-flex justify-content-center align-items-center">
                        <img src={ForgetPassImage} alt="Robot" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
