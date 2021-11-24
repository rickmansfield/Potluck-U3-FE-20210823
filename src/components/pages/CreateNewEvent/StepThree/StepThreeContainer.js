import React, { useState } from 'react';
import RenderStepThree from './RenderStepThreePage';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../../components/hooks/useForm';
import { useAPI } from '../../../../components/hooks/useAPI';
import {
  ADD_GUEST_START,
  ADD_GUEST_SUCCESS,
  ADD_GUEST_ERROR,
  DELETE_GUEST,
  TOGGLE_EDITING,
} from '../../../../Reducers/eventsReducer';
import { axiosWithAuth } from '../../../../utils/axiosWithAuth';

const initialFormValues = {
  first_name: '',
  email: '',
};

const StepThreeContainer = props => {
  const eventsState = useSelector(state => state.eventsReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [editID, setEditID] = useState('');
  const [buttonText, setButtonText] = useState('ADD GUEST');
  const [values, handleChanges, resetForm, setValues] = useForm(
    initialFormValues
  );
  const [moveData] = useAPI({
    method: 'post',
    url: '/guest',
    data: {
      first_name: values.first_name,
      email: values.email,
      event_id: eventsState.currentEvent.id,
    },
  });
  const [ putData] = useAPI({
    method: 'put',
    url: `/guest/${editID}`,
    data: {
      first_name: values.first_name,
      email: values.email,
    },
  });
  const postGuest = () => {
    dispatch({ type: ADD_GUEST_START });
    moveData()
      .then(res => {
        console.log(res);
        const new_item = {
          event_id: res.event_id,
          attending: res.attending,
          email: res.email,
          first_name: res.first_name,
          rsvp_pending: res.rsvp_pending,
          user_id: res.user_id,
          id: res.id,
        };
        dispatch({
          type: ADD_GUEST_SUCCESS,
          payload: new_item,
        });
        resetForm();
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ADD_GUEST_ERROR, payload: err });
      });
  };

  const putGuest = () => {
    dispatch({ type: ADD_GUEST_START });
    putData()
      .then(res => {
        const new_item = {
          event_id: res.event_id,
          attending: res.attending,
          email: res.email,
          first_name: res.first_name,
          rsvp_pending: res.rsvp_pending,
          user_id: res.user_id,
          id: res.id,
        };
        dispatch({
          type: ADD_GUEST_SUCCESS,
          payload: new_item,
        });
        setEditing(false);
        setButtonText('ADD GUEST');
        resetForm();
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ADD_GUEST_ERROR, payload: err });
      });
  };

  const submit = e => {
    e.preventDefault();
    !editing ? postGuest() : putGuest();
  };

  const editGuest = e => {
    console.log(e);
    dispatch({ type: DELETE_GUEST, payload: e.id });
    setEditID(e.id);
    setEditing(true);
    setButtonText('SAVE GUEST');
    setValues({
      first_name: e.first_name,
      email: e.email,
    });
  };

  const deleteGuest = e => {
    axiosWithAuth()
      .delete(`/guest/${e}`)
      .then(res => {
        console.log(res);
        dispatch({ type: DELETE_GUEST, payload: e });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ADD_GUEST_ERROR, payload: err });
      });
  };

  const nextStep = () => {
    dispatch({ type: TOGGLE_EDITING });
    props.setCurrentStep('');
    history.push('/dashboard');
  };

  return (
    <section>
      <RenderStepThree
        value={values}
        handleChanges={handleChanges}
        loading={eventsState.loading}
        submit={submit}
        state={eventsState.currentEvent.guests}
        buttonText={buttonText}
        editItem={editGuest}
        deleteItem={deleteGuest}
        nextStep={nextStep}
      />
    </section>
  );
};

export default StepThreeContainer;
