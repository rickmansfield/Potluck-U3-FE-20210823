import React from "react";
import styled from "styled-components";

// import Dropdown from "../../../components/DropDown";
// import { states } from "../../../components/constants/index";

const StyledContainer = styled.div`
  form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5% 20%;
    border: none;
    border-radius: 25px;
    margin-bottom: 1%;
    text-align: center;
  }
  .dropdown {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;
    border: none;
    border-radius: 25px;
  }
  .event-adress {
    padding-bottom: 10%;
    border-bottom: 1px solid GREY;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .event-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const RenderCreateNewEventPage = (props) => {
  // console.log("PROPS for RednerCreateNewEvent", props.loading);
  return (
    <StyledContainer>
      <form onSubmit={props.submit}>
        <div className="formContainer">
          <div className="formColumn event-adress">
            <h3>Event Address</h3>
            <input
              type="text"
              name="potluck_location"
              placeholder="Potluck Location"
              value={props.values.potluck_location}
              onChange={props.handleChanges}
            />
            {/* <input
            type="text"
            name="address_two"
            placeholder="Address Line Two"
            value={props.values.address_two}
            onChange={props.handleChanges}
          /> */}
            {/* <input
              type="text"
              name="city"
              placeholder="City"
              value={props.values.city}
              onChange={props.handleChanges}
            /> */}
            {/* <Dropdown
              className="dropdown"
              data={states}
              name="state"
              value={props.values.state}
              onChange={props.handleChanges}
            /> */}
            {/* <input
              type="text"
              name="zip"
              placeholder="Zip"
              value={props.values.zip}
              onChange={props.handleChanges}
            /> */}
          </div>
          <div className="formColumn event-details">
            <h3>Event Details</h3>
            <input
              type="text"
              name="potluck_name"
              placeholder="Name Your Potluck"
              value={props.values.potluck_name}
              onChange={props.handleChanges}
            />
            {/* <input
            type="text"
            name="contact_phone"
            placeholder="Contact Phone"
            value={props.values.contact_phone}
            onChange={props.handleChanges}
          /> */}
            <input
              // type="date"
              type="date"
              name="potluck_date"
              placeholder="Date? Format = 2021-08-26"
              value={props.values.potluck_date}
              onChange={props.handleChanges}
            />
            <div className="event-details start-end-intstructions">
              <input
                type="text"
                name="potluck_time"
                placeholder="Time? Format = 12:00:00"
                value={props.values.potluck_time}
                onChange={props.handleChanges}
              />
              {/* <input
              type="text"
              name="end_time"
              placeholder="End Time"
              value={props.values.end_time}
              onChange={props.handleChanges}
            /> */}
              <textarea
                height="5"
                name="potluck_description"
                placeholder="potluck_description Special instructions..."
                value={props.values.potluck_description}
                onChange={props.handleChanges}
              />
              {/* <div>
              {!props.loading ? (
                
                <button>{props.buttonText}</button>
              ) : (
                <button disabled>Loading...</button>
              )}
            </div> */}
              <button>submit</button>
            </div>
          </div>
        </div>
      </form>
    </StyledContainer>
  );
};

export default RenderCreateNewEventPage;
