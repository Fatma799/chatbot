import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate, Link } from "react-router-dom";
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
  const [country, setCountry] = useState("US");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  };

  const handleSignUp = () => {
      // هنا يمكنك إضافة منطق التحقق من البيانات بشكل أكثر تفصيلاً
      if (firstName && lastName && email && password && password === confirmPassword && agree) {
          localStorage.setItem('isLoggedIn', 'true');
          navigate('/Home');
      } else {
          alert('يرجى التأكد من صحة البيانات والموافقة على الشروط.');
      }
  }

  return (
      <>
          <div className="sign-up-page">
              <nav className="navbar navbar-expand-lg">
                  {/* ... Navbar ... */}
              </nav>
              <div className="container min-vh-100 d-flex align-items-center justify-content-center p-4 mt-4">
                  <div className="row w-100 mx-0">
                      <div className="col-12 col-md-6 form">
                          <h2 className="mb-4">Sign up</h2>
                          <form className="mb-4">
                              <div className="row g-3">
                                  <div className="col-12 col-md-6 mb-4">
                                      <label className="mb-2">First name</label>
                                      <input type="text" className="form-control" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                  </div>
                                  <div className="col-12 col-md-6 mb-4">
                                      <label className="mb-2">Last name</label>
                                      <input type="text" className="form-control" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                  </div>
                              </div>
                              <label className="mb-2">Email</label>
                              <input type="email" className="form-control mb-4" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                              <label className="mb-2">Phone number</label>
                              <div className="select-sec d-flex align-items-center mb-4">
                                  <select className="border-0" value={country} onChange={(e) => setCountry(e.target.value)}>
                                      <option value="US">US</option>
                                      <option value="UK">UK</option>
                                      <option value="FR">FR</option>
                                  </select>
                                  <input 
                                      type="text" 
                                      className="phone-input bg-transparent ps-4" 
                                      placeholder="+1 (555) 000-0000" 
                                      value={phone} 
                                      onChange={(e) => setPhone(e.target.value)}
                                  />
                              </div>
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

                              <label className="mb-2">Confirm Password</label>
                              <div className="input-container position-relative">
                                  <input
                                      type={showPassword ? "text" : "password"} 
                                      className="form-control pass-input mb-4"
                                      placeholder="Confirm Password"
                                      value={confirmPassword}
                                      onChange={(e) => setConfirmPassword(e.target.value)}
                                  />
                                  <div
                                      className="password-toggle-icon position-absolute"
                                      onClick={togglePasswordVisibility}
                                  >
                                      <img src={seePassword} alt="See Password" />
                                  </div>
                              </div>

                              <div className="check-box mb-4">
                                  <label className="checkbox-container d-flex align-items-center">
                                      <input type="checkbox" className="checkboxInput me-3" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                                      <span>You agree to our friendly privacy policy.</span>
                                  </label>
                              </div>
                              <button type="button" className="btn text-light w-100 py-2" onClick={handleSignUp}>Sign up</button>
                          </form>
                          <div className="text-center mt-4">
                              <p className="text-muted">Sign up with</p>
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
                                  Already have an account?<Link to="/Login" className="goTo-signIn ms-2 text-decoration-none">Sign in</Link>
                              </p>
                          </div>
                      </div>
                      <div className="col-12 col-md-6 d-none d-md-flex align-items-center justify-content-center signup-img">
                          <img src={loginImg} alt="AI Chatbot" className="img-fluid" />
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
};
//   const [showPassword, setShowPassword] = useState(false);
//   const [country, setCountry] = useState("US");
//   const [phone, setPhone] = useState("");

//   // دالة لتبديل عرض الباسورد
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
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
//           <div className="row w-100 mx-0">
//             {/* Left Side - Form */}
//             <div className="col-12 col-md-6 form">
//               <h2 className="mb-4">Sign up</h2>
//               <form className="mb-4">
//                 <div className="row g-3">
//                   <div className="col-12 col-md-6 mb-4">
//                     <label className="mb-2">First name</label>
//                     <input type="text" className="form-control" placeholder="First name" />
//                   </div>
//                   <div className="col-12 col-md-6 mb-4">
//                     <label className="mb-2">Last name</label>
//                     <input type="text" className="form-control" placeholder="Last name" />
//                   </div>
//                 </div>
//                 <label className="mb-2">Email</label>
//                 <input type="email" className="form-control mb-4" placeholder="you@company.com" />
//                 <label className="mb-2">Phone number</label>
//                 <div className="select-sec d-flex align-items-center mb-4">
//                   <select className="border-0" value={country} onChange={(e) => setCountry(e.target.value)}>
//                     <option value="US">US</option>
//                     <option value="UK">UK</option>
//                     <option value="FR">FR</option>
//                   </select>
//                   <input 
//                     type="text" 
//                     className="phone-input bg-transparent ps-4" 
//                     placeholder="+1 (555) 000-0000" 
//                     value={phone} 
//                     onChange={(e) => setPhone(e.target.value)}
//                   />
//                 </div>
//                 <label className="mb-2">Password</label>
//                 <div className="input-container position-relative">
//                   <input
//                     type={showPassword ? "text" : "password"} 
//                     className="form-control pass-input mb-4"
//                     placeholder="Password"
//                   />
//                   <div
//                     className="password-toggle-icon position-absolute"
//                     onClick={togglePasswordVisibility}
//                   >
//                     <img src={seePassword} alt="See Password" />
//                   </div>
//                 </div>

//                 <label className="mb-2">Confirm Password</label>
//                 <div className="input-container position-relative">
//                   <input
//                     type={showPassword ? "text" : "password"} 
//                     className="form-control pass-input mb-4"
//                     placeholder="Password"
//                   />
//                   <div
//                     className="password-toggle-icon position-absolute"
//                     onClick={togglePasswordVisibility}
//                   >
//                     <img src={seePassword} alt="See Password" />
//                   </div>
//                 </div>

//                 <div className="check-box mb-4">
//                   <label className="checkbox-container d-flex align-items-center">
//                     <input type="checkbox" className="checkboxInput me-3" />
//                     <span>You agree to our friendly privacy policy.</span>
//                   </label>
//                 </div>
//                 <button type="submit" className="btn text-light w-100 py-2">Sign up</button>
//               </form>
//               <div className="text-center mt-4">
//                 <p className="text-muted">Sign up with</p>
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
//                   Already have an account?<Link to="/Login" className="goTo-signIn ms-2 text-decoration-none">Sign in</Link>
//                 </p>
//               </div>
//             </div>
//               {/* Right Side - Image */}
//               <div className="col-12 col-md-6 d-none d-md-flex align-items-center justify-content-center signup-img">
//                 <img src={loginImg} alt="AI Chatbot" className="img-fluid" />
//               </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default SignUp;
