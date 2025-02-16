import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../assets/light-mode/logo.svg";
import LightModeIcon from "../assets/light-mode/lightmode-icon.svg";
import ENIcon from "../assets/light-mode/english-icon.svg";
import landingImage from "../images/landingph.png";
import "./SignUp.css";

function Hero() {
    return (
        <main className="landing_container">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
                <div className="container">
                    <a className="Logo-image navbar-brand d-flex align-items-center text-decoration-none" href="#">
                        <img src={Logo} alt="Genio AI Logo" className="logo-img me-3" />Genio AI
                    </a>
                    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="basic-navbar-nav">
                        <ul className="btn-section navbar-nav ms-auto d-flex flex-wrap justify-content-center gap-3">
                            <li className="nav-item d-flex gap-3  d-flex flex-wrap justify-content-center">
                                <button className="border-0 bg-transparent d-flex align-items-center btn-nav">
                                    <img src={LightModeIcon} className="me-2" alt="Light Mode" /> LG
                                </button>
                                <button className="border-0 bg-transparent d-flex align-items-center btn-nav">
                                    <img src={ENIcon} className="me-2" alt="English" /> EN
                                </button>
                            </li>
                            <li className="nav-item d-flex gap-3 ms-5">
                                <a href="./SignUp" className="btn btn-auth register-nav text-light">Sign up</a>
                                <a href="./Login" className="btn btn-auth login-nav">Sign in</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container py-5 mt-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 text-center text-lg-start">
                        <h1 className="landing-title fw-bold display-4 mb-4">Genio AI</h1>
                        <p className="landing-title fs-5 mb-5">
                            Your smart assistant for seamless access to government services and information. Get answers, guidance, and support instantly—simplifying the way you connect with essential services.
                        </p>
                        <div className="footer-auth d-flex flex-column flex-sm-row justify-content-start align-items-center gap-3">
                            <a href="./SignUp" className="btn register-nav text-light">Get Started</a>
                            <a href="./Login" className="login-footer btn px-4 py-2">Sign In</a>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block text-center">
                        <img src={landingImage} alt="Robot" className="img-fluid w-75" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero;
