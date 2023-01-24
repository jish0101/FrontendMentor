import React, { useEffect, useState } from "react";
import "./cta.css";
import Button from "../../components/button/Button";

export default function CTA() {
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const [email, setEmail] = useState("");

  function handleSubmit() {
    const regex = new RegExp(
      "^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$"
    );
    const test = regex.test(email);
    console.log(test);

    if (!test) {
      setError(() => {
        return {
          status: true,
          message: "Whoops, Make sure it's an email",
        };
      });
    } else {
      return setError({ status: false, message: "" });
    }
  }

  let border = {
    borderRadius: "5px",
  };

  if (error.status) {
    border = {
      undefined,
    };
  }

  return (
    <div className="bm__cta" id="contact">
      <div className="bm__cta_container | mx-auto text-center flow">
        <span>35,000+ already joined</span>
        <h2 className="secondary-heading">
          Stay up-to-date with what we’re doing
        </h2>
        <div className="bm__cta_contact">
          <input
            type="email"
            style={border}
            className={`${error.status ? "error-show" : null}`}
            placeholder="Enter your email address"
            onChange={(e) => {
              handleSubmit();
              return setEmail(e.target.value);
            }}
            value={email}
          />
          {error?.status && <span className="error-msg">{error.message}</span>}
          <Button dataType="red" text="Contact Us" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
