import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ForgetPassImage from "../assets/light-mode/forgetPass-img.svg";
import IconBack from "../assets/light-mode/back-icon.svg";
import "./ForgetPassword.css";

const Verification = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const navigate = useNavigate();
  const location = useLocation();
  const contact = location.state?.contact || "your contact"; // افتراضي إذا لم يتم تمرير قيمة

  const handleSend = () => {
    navigate("/CreatePassword");
  };

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      let newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value !== "" && index < 3) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
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
              onClick={() => navigate("/ForgetPassword")} 
              style={{ cursor: "pointer"}} 
            />
            <h2 className="text-title">Verification</h2>
            <p className="text-paragraph">Enter the 4-digit code we sent to {contact}</p>

            {/* Input Fields */}
            <div className="row justify-content-center gap-2 mb-3">
                {code.map((num, index) => (
                  <div key={index} className=" col-auto p-0 d-flex justify-content-center">
                    <input
                      id={`code-${index}`}
                      type="text"
                      className="form-control text-center verification-input d-md-block d-sm-inline form-control-lg form-control-sm"
                      maxLength="1"
                      value={num}
                      onChange={(e) => handleChange(index, e.target.value)}

                    />
                  </div>
                ))}
            </div>


            <button className="btn btn-primary w-100 py-2 mt-3 btn-send" onClick={handleSend}>
              Confirm
            </button>

            {/* زر Resend Code في المنتصف */}
            <div className="d-flex justify-content-center mt-2">
              <button className="btn btn-link mt-2 fs-5 text-center w-75 w-md-auto">
                Resend Code
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="d-flex justify-content-center mt-4">
              <span className="dot mx-1"></span>
              <span className="dot active mx-1"></span>
              <span className="dot mx-1"></span>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-5 col-md-6 d-none d-md-flex justify-content-center align-items-center">
            <img src={ForgetPassImage} alt="Verification" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
