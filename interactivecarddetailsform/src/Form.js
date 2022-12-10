import React from "react";
import Card from "./Card";

export default function Form() {
  const [formData, setFormData] = React.useState({
    cardHolderName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <>
      <Card props={{ ...formData }} />
      <div className="form-container">
        <div className="form-wrapper">
          <form action="">
            <label htmlFor="name">CARDHOLDER NAME</label>
            <input
              type="text"
              name="cardHolderName"
              id="name"
              className="form-input"
              value={formData.cardHolderName}
              autoComplete="off"
              onChange={handleChange}
              maxLength="28"
            />
            <label htmlFor="card-number">CARD NUMBER</label>
            <input
              type="text"
              name="cardNumber"
              id="number"
              className="form-input"
              onChange={handleChange}
              value={formData.cardNumber}
              maxLength="19"
            />
            <div className="small-input">
              <div className="small-input-one">
              <label htmlFor="month">Exp. Date (MM/YY)</label>
              <input
                className="form-input"
                type="text"
                name="month"
                onChange={handleChange}
                id="month"
                value={formData.month}
                maxLength="2"
                autoComplete="off"
              />
              <input
                type="text"
                className="form-input"
                name="year"
                id="year"
                value={formData.year}
                maxLength="2"
                onChange={handleChange}
                autoComplete="off"
              />
              </div>
              <div className="small-input-two">
              <label htmlFor="cvc">CVC</label>
              <input
                className="form-input"
                type="text"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                id="cvc"
                maxLength="3"
                autoComplete="off"
              />
              </div>
            </div>
            <button className="form-btn btn">Confirm</button>
          </form>
        </div>
      </div>
    </>
  );
}
