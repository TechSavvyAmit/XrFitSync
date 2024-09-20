import React, { useRef } from "react";
import "./Membership.css";
import emailjs from "@emailjs/browser";

const Membership = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jh4g3hj",  // Your service ID
        "template_mjbvz79",  // Your template ID
        form.current,
        "ZHao22rj3gmHRg0Tx"  // Your public key (not inside an object)
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to </span>
          <span>level up</span>
        </div>
        <div>
          <span>your body </span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>

      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email to Join "
            required
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Membership;
