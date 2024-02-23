import React, { useEffect } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "../css/checkoutscreen.css";
import { useSelector } from "react-redux";

function CheckoutScreen() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/checkout");
  };

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect( () => {
    if(!userInfo){
      navigate('/login')
    }
  })

  return (
    <div>
      <Header location="nav-all" />
      <div className="title">
        <h1>Order Summary</h1>
      </div>

      <div className="checkout-content">
        <div className="card1">
          <div className="container-title">
            <h2>Billing Details</h2>
          </div>

          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="name">
              <div>
                <label for="firstName" class="form-label">
                  First name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required=""
                />
              </div>
              <div>
                <label for="lastName" class="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required=""
                />
              </div>
            </div>

            <div className="email-input">
              <label for="email" class="form-label">
                Email{" "}
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="you@example.com"
              />
            </div>

            <div class="phone-number">
              <label for="phone-number" class="form-label">
                Phone number{" "}
              </label>
              <input type="email" class="form-control" id="phone-number" />
            </div>
                        
            <hr
              style={{
                backgroundColor: "black",
              }}
            />

            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="same-address"
              />
              <label class="form-check-label" for="same-address">
                I agree to terms and conditions
                {/* <a href="" id="termsLink"> */}
                {/* </a> */}
              </label>
            </div>

            <div className="button">
              <Button
                onClick={handleSubmit}
                className="btn-check-availability-home"
                text="Proceed to Pay"
              />
            </div>
          </form>
        </div>

        <div class="card2">
          <h2>
            <span>Your order</span>
          </h2>
          <div className="ul">
            <div className="li">
              <div>
                <h3>Bravo Turfs</h3>
                <small>Badminton - 2 hrs &nbsp;(750/hr)</small>
              </div>
              <span>
                <i class="fa fa-inr"></i>1500
              </span>
            </div>
            <div className="li">
              <div>
                <h3>GST</h3>
                <small>state tax and Central tax</small>
              </div>
              <span>
                <i class="fa fa-inr"></i>270
              </span>
            </div>
            <div className="li">
              <div>
                <h3>convenience Fee</h3>
                <small>Online booking fee</small>
              </div>
              <span>
                <i class="fa fa-inr"></i>30
              </span>
            </div>
            <div className="li">
              <span>Total (INR)</span>
              <strong>
                <i class="fa fa-inr"></i>1800
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutScreen;
