import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link, Switch, useHistory } from "react-router-dom";
import { CreateNewEvent } from "../CreateNewEvent";
import PrivateRoute from "../../../utils/Private";
import { TOGGLE_EDITING } from "../../../Reducers/eventsReducer";

import DashboardHost from "../Dashboard/DashBoardHostEvents";
import DashboardGuest from "../Dashboard/DashBoardGuestEvents";
import GuestRsvp from "../../../components/GuestRsvp";

const MainDiv = styled.div`
  height: 87.8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  background-size: cover;

  h1 {
    margin-top: -2%;
    font-size: 3rem;
  }
  button {
    border-radius: 20px;
    width: 80%;
    height: 40px;
    font-size: 1.3rem;
    color: white;
    font-weight: 700;
    background: rgb(34, 193, 195);
    background: linear-gradient(90deg, rgba(34, 193, 195, 1) 0%, #284b63 100%);
    border: 0px;
    cursor: pointer;
    transition: opacity 0.25s ease-out;
  }
  button:hover {
    opacity: 0.85;
  }
  .content-container {
    border-radius: 30px;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    min-width: 400px;
    width: 28%;
    max-height: 85vh;

    .attending button {
      border-radius: 25px;
      width: 40%;
      padding: 3.5%;
      font-size: 1.3rem;
      color: white;
      font-weight: 700;
      background: rgb(34, 193, 195);
      background: linear-gradient(
        90deg,
        rgba(34, 193, 195, 1) 0%,
        #284b63 100%
      );
      border: 0px;
      cursor: pointer;
      transition: opacity 0.25s ease-out;
      margin-bottom: 4.5%;
    }
  }
`;

function RenderDashboardPage() {
  const eventsState = useSelector((state) => state.eventsReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const createNewEvent = (e) => {
    e.preventDefault();
    dispatch({ type: TOGGLE_EDITING });
    history.push("/dashboard/new-event");
  };

  const logout = (e) => {
    localStorage.removeItem("token");
    window.location.href = "login";
    // console.log('LOGGED OUT?:', localStorage.headers.authorization);
  };

  return (
    <div className="page">
      <header>
        <h1>POTLUCK PLANNER</h1>
        <nav>
          <Link to="/landing">Home</Link>
          <span className="navspans"></span>
          <Link to="/login"> Login</Link>
          <span className="navspans"></span>
          <Link to="/my-profile">My&nbsp;Profile</Link>
          <span className="navspans"></span>
          <Link to="/meet-team">Meet&nbsp;our&nbsp;Team</Link>
          <span className="navspans"></span>
          <Link to href="/" onClick={logout}>
            Logout
          </Link>
        </nav>
      </header>
      <MainDiv className="page">
        <div className="content-container">
          <div className="dashboard-container">
            <div className="formColumn">
              {!eventsState.editing ? (
                <button
                  className="cssanimation pepe sequence"
                  onClick={createNewEvent}
                >
                  Create New Potluck
                </button>
              ) : null}
              {eventsState.editing ? <CreateNewEvent /> : null}
              {!eventsState.editing ? <DashboardHost /> : null}
            </div>
            <div className="formColumn attending">
              {!eventsState.editing ? <DashboardGuest /> : null}
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <Switch>
            <PrivateRoute path="/dashboard/new-event/step-two"></PrivateRoute>
            <PrivateRoute path="/dashboard/guest-rsvp">
              <GuestRsvp />
            </PrivateRoute>
          </Switch>
        </div>
      </MainDiv>
    </div>
  );
}
export default RenderDashboardPage;
