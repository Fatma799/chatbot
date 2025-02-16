import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import seePassword from "../assets/light-mode/password-icon.svg";
import ForgetPassImage from "../assets/light-mode/forgetPass-img.svg";
import SuccessImage from "../assets/light-mode/success-image.svg"; 
import IconBack from "../assets/light-mode/back-icon.svg";
import "./ForgetPassword.css";

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // State for success message
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // منع الإرسال التلقائي
    if (password === confirmPassword && password.length >= 6) {
      setIsSuccess(true); // عرض رسالة النجاح
    } else {
      alert("Passwords do not match or are too short!");
    }
  };

  const goToLogin = () => {
    navigate("/login"); // إعادة التوجيه إلى صفحة تسجيل الدخول
  };

  return (
    <div className={isSuccess ? "success-page" : "style-page"}>
      <div className="successful-section container vh-100 d-flex flex-column justify-content-center">
        {isSuccess ? (
          // عرض رسالة النجاح
          <div className="caption text-center d-flex flex-column justify-content-center align-items-center">
            <img src={SuccessImage} alt="Success" className="img-fluid mb-3" />
            <h3>Successfully Changed</h3>
            <button className="btn btn-send mt-3 w-50 text-light" onClick={goToLogin}>
              Go to Login
            </button>
          </div>
        ) : (
          // عرض نموذج كلمة المرور
          <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="row w-100 mb-4">
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <img
                  src={IconBack}
                  alt="back"
                  className="back-img mb-3"
                  onClick={() => navigate("/Verification")}
                  style={{ cursor: "pointer" }}
                />
                <h2 className="text-title">Create Password</h2>
                <p className="text-paragraph">Please enter your new password</p>

                {/* ✅ إضافة الـ form */}
                <form onSubmit={handleSubmit} className="mt-3">
                  <label className="mb-2">Password</label>
                  <div className="input-section position-relative">
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
                  <div className="input-section position-relative">
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

                  <button type="submit" className="btn btn-primary w-100 btn-send">
                    Done
                  </button>

                  {/* Custom Dots Indicator */}
                  <div className="d-flex justify-content-center mt-5">
                    <span className="dot me-2"></span>
                    <span className="dot me-2"></span>
                    <span className="dot active me-2"></span>
                  </div>
                </form>
              </div>
              <div className="col-12 col-md-6 d-none d-md-flex align-items-center justify-content-center signup-img">
                <img src={ForgetPassImage} alt="Robot" className="img-fluid" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePassword;
