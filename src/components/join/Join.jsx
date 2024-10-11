import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Join.css";

const Join = () => {
  const form = useRef();
  const [message, setMessage] = useState(""); // State for the pop-up message
  const [isError, setIsError] = useState(false); // State for success/error

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jh4g3hj",
        "template_mjbvz79",
        form.current,
        "ZHao22rj3gmHRg0Tx"
      )
      .then(
        (result) => {
          setMessage("Email sent successfully!"); // Show success message
          setIsError(false); // No error, it's a success
          hideMessageAfterDelay();
        },
        (error) => {
          setMessage("Failed to send email. Please try again."); // Show error message
          setIsError(true); // It's an error
          hideMessageAfterDelay();
        }
      );
  };

  const hideMessageAfterDelay = () => {
    setTimeout(() => {
      setMessage(""); // Hide pop-up after 3 seconds
    }, 3000);
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            required
          />
          <button className="btn btn-j">Join Now</button>

          {/* Pop-up displayed near the button */}
          {message && (
            <div className={`popup-message ${isError ? "error" : "success"}`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Join;
