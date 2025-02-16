import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import Logo from "../assets/light-mode/logo.svg";
import LightModeIcon from "../assets/light-mode/lightmode-icon.svg";
import ENIcon from "../assets/light-mode/english-icon.svg";
import loginImg from "../assets/light-mode/img-form.svg";
import facebookIcon from "../assets/light-mode/facebook-icon.svg";
import googleIcon from "../assets/light-mode/google-icon.svg";
import twitterIcon from "../assets/light-mode/twitter-icon.svg";
import seePassword from "../assets/light-mode/password-icon.svg";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {

        if (email && password ) {
            localStorage.setItem('isLoggedIn', 'true');
            console.log('Login successful. isLoggedIn:', localStorage.getItem('isLoggedIn'));
            navigate('/Home');
        } else {
            alert('بيانات الدخول غير صحيحة.');
        }
    };

    return (
        <>
            <div className="sign-up-page">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="Logo-image text-decoration-none">
                            <img src={Logo} alt="Genio AI Logo" className="logo-img me-3" />Genio AI
                        </a>
                        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="basic-navbar-nav">
                            <ul className="btn-section navbar-nav ms-auto d-flex justify-content-center align-items-center flex-row gap-2">
                                <li className="nav-item me-3">
                                    <button className="border-0 pe-2 btn-nav"><img src={LightModeIcon} className="me-2 ms-1"></img>LG</button>
                                </li>
                                <li className="nav-item">
                                    <button className="border-0 pe-2 btn-nav"><img src={ENIcon} className="me-2 ms-1"></img>EN</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container min-vh-100 d-flex align-items-center justify-content-center p-4 mt-4">
                    <div className="row w-100 max-w-4xl  overflow-hidden">
                        <div className="col-md-6 form">
                            <h2 className="mb-4">Sign in</h2>
                            <form className="mb-4">
                                <label className="mb-2">Email</label>
                                <input
                                    type="email"
                                    className="form-control mb-4"
                                    placeholder="you@company.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <label className="mb-2">Password</label>
                                <div className="input-container position-relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control pass-input mb-4"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div
                                        className="password-toggle-icon position-absolute"
                                        onClick={togglePasswordVisibility}
                                    >
                                        <img src={seePassword} alt="See Password" />
                                    </div>
                                </div>

                                <button type="button" className="btn text-light w-100 py-2" onClick={handleLogin}>
                                    Sign in
                                </button>
                            </form>
                            <div className="forgot-password-container text-end ">
                                <a href="/ForgetPassword" className="forgot-password text-decoration-none">Forget password</a>
                            </div>
                            <div className="text-center mt-4">
                                <p className="text-muted">Sign in with</p>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-social border-0 shadow-none">
                                        <img src={facebookIcon} alt="facebook-icon" />
                                    </button>
                                    <button className="btn btn-social border-0 shadow-none">
                                        <img src={googleIcon} alt="google-icon" />
                                    </button>
                                    <button className="btn btn-social border-0 shadow-none">
                                        <img src={twitterIcon} alt="twitter-icon" />
                                    </button>
                                </div>
                                <p className="text-muted mt-4">
                                    Don't have an Account? <a href="/" className="goTo-signIn text-decoration-none">Sign up</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center signup-img">
                            <img src={loginImg} alt="AI Chatbot" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); 

//   const togglePasswordVisibility = () => {
//       setShowPassword(!showPassword);
//   };

//   const handleLogin = () => {
//       if (email === 'test@example.com' && password === 'password') { // استبدل بالشروط الحقيقية
//           localStorage.setItem('isLoggedIn', 'true');
//           navigate('/Home');
//       } else {
//           alert('wromg information');
//       }
//   };

//   return (
//     <>
//       <div className="sign-up-page">
//         {/* Navbar */}
//         <nav className="navbar navbar-expand-lg">
//           <div className="container">
//             <a className="Logo-image text-decoration-none">
//               <img src={Logo} alt="Genio AI Logo" className="logo-img me-3" />Genio AI
//             </a>
//             <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="basic-navbar-nav">
//               <ul className="btn-section navbar-nav ms-auto d-flex justify-content-center align-items-center flex-row gap-2">
//                 <li className="nav-item me-3">
//                   <button className="border-0 pe-2 btn-nav"><img src={LightModeIcon} className="me-2 ms-1"></img>LG</button>
//                 </li>
//                 <li className="nav-item">
//                   <button className="border-0 pe-2 btn-nav"><img src={ENIcon} className="me-2 ms-1"></img>EN</button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         {/* Sign Up Form */}
//         <div className="container min-vh-100 d-flex align-items-center justify-content-center p-4 mt-4">
//           <div className="row w-100 max-w-4xl  overflow-hidden">
//             {/* Left Side - Form */}
//             <div className="col-md-6 form">
//               <h2 className="mb-4">Sign in</h2>
//               {/*form*/}
//               <form className="mb-4">
//                 <label className="mb-2">Email</label>
//                 <input type="email"
//                  className="form-control mb-4"
//                  placeholder="you@company.com"
//                  value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                  />

//                 <label className="mb-2">Password</label>
//                 <div className="input-container position-relative">
//                   <input
//                     type={showPassword ? "text" : "password"}  // تحديد ما إذا كان الانبوت يظهر الباسورد أو لا
//                     className="form-control pass-input mb-4"
//                     placeholder="Password"
//                     value={password}
//                      onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <div
//                     className="password-toggle-icon position-absolute"
//                     onClick={togglePasswordVisibility}  // عند الضغط على الأيقونة
//                   >
//                     <img src={seePassword} alt="See Password" />
//                   </div>
//                 </div>

//                 <button type="submit" className="btn text-light w-100 py-2 ">Sign in</button>
//               </form>
              
//               {/*forget Password*/}
//               <div className="forgot-password-container text-end ">
//                 <a href="/ForgetPassword" className="forgot-password text-decoration-none">Forget password</a>
//               </div>

//               {/*social contact*/}
//               <div className="text-center mt-4">
//                 <p className="text-muted">Sign in with</p>
//                 <div className="d-flex justify-content-center">
//                   <button className="btn btn-social border-0 shadow-none">
//                     <img src={facebookIcon} alt="facebook-icon" />
//                   </button>
//                   <button className="btn btn-social border-0 shadow-none">
//                     <img src={googleIcon} alt="google-icon" />
//                   </button>
//                   <button className="btn btn-social border-0 shadow-none">
//                     <img src={twitterIcon} alt="twitter-icon" />
//                   </button>
//                 </div>
//                 <p className="text-muted mt-4">
//                   Don't have an Account? <a href="/" className="goTo-signIn text-decoration-none">Sign up</a>
//                 </p>
//               </div>

//             </div>
//             {/* Right Side - Image */}
//             <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center signup-img">
//               <img src={loginImg} alt="AI Chatbot" className="img-fluid" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default SignUp;
