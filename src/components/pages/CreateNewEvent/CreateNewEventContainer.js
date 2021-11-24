import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useForm } from "../../../components/hooks/useForm";
import { useAPI } from "../../../components/hooks/useAPI";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_EVENT_START,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_ERROR,
  EDIT_EVENT_SUCCESS,
  
} from "../../../Reducers/eventsReducer";
import RenderCreateNewEventPage from "./RenderCreateNewEventPage";
import StepTwoContainer from "./StepTwo/StepTwoContainer";
import StepThreeContainer from "./StepThree/StepThreeContainer";

const initialFormValues = {
  potluck_name: "",
  potluck_description: "",
  potluck_date: "",
  potluck_time: "",
  potluck_location: "",
  organizer: 0,
  // address_one: "",
  // address_two: '',
  // city: "",
  // state: "",
  // zip: "",
  // contact_phone: '',
  // end_time: '',

};

//step1 name, when, where
//step2 add items to bring
//step3 fill guest list!

const StyledContainer = styled.div`
  padding: 5% 0;

  h2 {
    font-size: 2.5rem;
    margin: -1%;
  }
  h3 {
    font-size: 1.5rem;
  }
  .newEventProgress {
    display: flex;
    justify-content: center;

    justify-content: space-evenly;
    margin: -4%;
  }
`;

const CreateNewEvent = (props) => {
  const userState = useSelector((state) => state.userReducer);
  const eventsState = useSelector((state) => state.eventsReducer);
  const history = useHistory();
  const buttonText = eventsState.editEvent ? "SAVE" : "NEXT STEP";
  const [values, handleChanges] = useForm(
    eventsState.editEvent ? eventsState.currentEvent[0] : initialFormValues
  );
  // console.log(userState)
  // console.log(eventsState)
  const [currentStep, setCurrentStep] = useState("");
  const dispatch = useDispatch();
  const [moveData] = useAPI({
    method: "post",
    url: "/api/potlucks",
    data: {
      ...values,
      organizer: eventsState.currentUser
    },
  });

  const [putData] = useAPI({
    method: "put",
    url: `/api/potlucks/:id${eventsState.currentEventID}`,
    data: {
      ...values,
      user_id: userState.user_id,
    },
  });

  const postEvent = () => {
    dispatch({ type: ADD_EVENT_START });
    moveData()
      .then(res => {
        // console.log('PostEvent Resp: CreateNewEventContainer.js', res);
        const newEvent = {
          ...res,
          event_id: res.potluck_id,
          menu_items: [],
          guests: [],
        };
        dispatch({
          type: ADD_EVENT_SUCCESS,
          payload: newEvent,
        });
        // resetForm();
        setCurrentStep("two");
        history.push("/dashboard/new-event/step-two");
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ADD_EVENT_ERROR, payload: err });
      });
  };

  const putEvent = () => {
    dispatch({ type: ADD_EVENT_START });
    putData()
      .then((res) => {
        // console.log(res);
        const newEvent = {
          ...res,
          event_id: res.id,
          menu_items: [],
          guests: [],
        };
        dispatch({
          type: EDIT_EVENT_SUCCESS,
          payload: newEvent,
        });
        // resetForm();
        setCurrentStep("");
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ADD_EVENT_ERROR, payload: err });
      });
  };

  const submit = (e) => {
    e.preventDefault();
    !eventsState.editEvent ? postEvent() : putEvent();
  };

  return (
    <StyledContainer>
      {!eventsState.editing && null}
      <h2>Let's Create Your Event</h2>
      {currentStep === "two" ? (
        <StepTwoContainer setCurrentStep={setCurrentStep} />
      ) : currentStep === "three" ? (
        <StepThreeContainer setCurrentStep={setCurrentStep} />
      ) : (
        <RenderCreateNewEventPage
          values={values}
          handleChanges={handleChanges}
          loading={eventsState.loading}
          buttonText={buttonText}
          submit={submit}
        />
      )}
    </StyledContainer>
  );
};

export default CreateNewEvent;
