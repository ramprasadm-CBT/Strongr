import React, { useEffect, useState } from "react";
import "../css/bookingscreen.css";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import DateInput from "../components/DateInput";
import Duration from "../components/Duration";
import { useDispatch, useSelector } from "react-redux";
import {
  listclubLocation,
  listclubGame,
  listclubWorking,
} from "../actions/actions";

function BookingScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // const [gameName, setGameName] = useState("");
  // const [areaName, setAreaName] = useState("");
  
  const [date, setDate] = useState("");

  useEffect(() => {
    dispatch(listclubLocation(id));
    dispatch(listclubGame(id));
    dispatch(listclubWorking(id));
  }, [dispatch, id]);

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const Location = useSelector((state) => state.Location);
  const { error, loading, clubLocation } = Location;

  const Games = useSelector((state) => state.clubGame);
  const { gameError, gameLoading, clubGame } = Games;

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/checkout");
  };

  const [areaName, setAreaName] = useState(
    clubLocation?.area?.area_name || ""
  );

  const [gameName, setGameName] = useState(
    clubGame?.[0]?.game_type?.game_name || ""
  );

  const handleGameChange = (e) => {
    setGameName(e.target.value);
  };

  const handleAreaChange = (e) => {
    setAreaName(e.target.value);
  };

  const getSelectedGamePricing = () => {
    const selectedGame = clubGame?.find((game) => game.game_type.game_name === gameName);
    return (Number(selectedGame?.pricing).toFixed(0));
  };
  
  const [duration, setDuration] = useState(1);

  const handleDurationChange = (newDuration) => {
    setDuration(newDuration);
  };

  const clubPrice = (Number(getSelectedGamePricing())*duration).toFixed(0)

  const taxPrice = ((Number(clubPrice))*0.05).toFixed(0);  

  const bookingFee = 10

  const totalPrice = (Number(Number(clubPrice)+Number(taxPrice)+Number(bookingFee))).toFixed(0)


  return (
    <div>
      <Header location="nav-all" />
      <div className="booking-content">
        <div className="card1">
          <div className="container-title">
            <h2>{clubLocation?.organization?.organization_name}</h2>
            <h3>{clubLocation?.area?.area_name}</h3>
          </div>
          <hr
            style={{
              backgroundColor: "black",
            }}
          />
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="booking-container">
              <div className="select">
                <label>Select area :&nbsp;</label>
                <select value={areaName} onChange={handleAreaChange}>
                  <option
                    key={clubLocation?.area?.id}
                    value={clubLocation?.area?.area_name}
                  >
                    {clubLocation?.area?.area_name}
                  </option>
                </select>
              </div>

              <div className="select">
                <label>Select game :&nbsp;</label>
                <select value={gameName} onChange={handleGameChange}>
                  {clubGame?.map((game) => (
                    <option key={game.id} value={game.game_type.game_name}>
                      {game.game_type.game_name}
                    </option>
                  ))}
                </select>
              </div>

              <DateInput id="date" value={date} onChange={handleDateChange} />

              <Duration id="hours" label="Duration" onNumChange={handleDurationChange}/>
            </div>
          </form>
        </div>

        <div class="card2">
          <h2>
            <span>Your Order</span>
          </h2>

          <div className="ul">
            <div className="li">
              <div>
                <h3>{clubLocation?.organization?.organization_name}</h3>
                
                <small>
                  {gameName}- {duration} hrs &nbsp;({getSelectedGamePricing()}/hr)
                </small>
              </div>
              <span>
                <i class="fa fa-inr"></i>{clubPrice}
              </span>
            </div>
            <div className="li">
              <div>
                <h3>GST</h3>
                <small>state tax and Central tax</small>
              </div>
              <span>
                <i class="fa fa-inr"></i>{taxPrice}
              </span>
            </div>
            <div className="li">
              <div>
                <h3>convenience Fee</h3>
                <small>Online booking fee</small>
              </div>
              <span>
                <i class="fa fa-inr"></i>{bookingFee}
              </span>
            </div>
            <div className="li">
              <span>Total (INR)</span>
              <strong>
                <i class="fa fa-inr"></i>{totalPrice}
              </strong>
            </div>
          </div>
          <div className="button">
            <Button
              disabled={totalPrice < 60}
              onClick={handleSubmit}
              className="btn-check-availability-home"
              text="Book Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingScreen;
