import React, { useState } from 'react';
import RenderStepTwo from './RenderStepTwoPage';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../../components/hooks/useForm';
import { useAPI } from '../../../../components/hooks/useAPI';
import {
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  DELETE_ITEM,
} from '../../../../Reducers/eventsReducer';
import { axiosWithAuth } from '../../../../utils/axiosWithAuth';

const initialFormValues = {
  food_name:"",
  food_description:"",
};

const StepTwoContainer = props => {
  const eventsState = useSelector(state => state.eventsReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [editID, setEditID] = useState('');
  const [buttonText, setButtonText] = useState('ADD ITEM');
  const [values, handleChanges, resetForm, setValues] = useForm(
    initialFormValues
  );
  // console.log('StepTwo eventsState', eventsState);
  const [moveData] = useAPI({
    method: 'post',
    url: '/api/foods ',
    data: {
      food_name: values.item_name,
      food_description:"",
    },
  });
  const [putData] = useAPI({
    method: 'put',
    url: `/api/foods/${editID}`,
    data: {
      item_name: values.item_name,
    },
  });

  const postItem = () => {
    dispatch({ type: ADD_ITEM_START });
    moveData()
      .then(res => {
        console.log('Food Added response',res)
        const new_item = {
          food_id: res.food_id,
          // potluck_id: res.potluck.id,
          food_name: res.food_name,
        };
        console.log('new_item', new_item);
        dispatch({
          type: ADD_ITEM_SUCCESS,
          payload: new_item,
        });
        // console.log('StepTwo eventsState', eventsState);
        resetForm();
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ADD_ITEM_ERROR, payload: err });
      });
  };

  // const putItem = () => {
  //   dispatch({ type: ADD_ITEM_START });
  //   putData()
  //     .then(res => {
  //       console.log('pu res',res);
  //       const new_item = {
  //         event_id: res.event_id,
  //         id: res.id,
  //         item_name: res.item_name,
  //       };
  //       dispatch({
  //         type: ADD_ITEM_SUCCESS,
  //         payload: new_item,
  //       });
  //       setEditing(false);
  //       setButtonText('ADD ITEM');
  //       resetForm();
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       dispatch({ type: ADD_ITEM_ERROR, payload: err });
  //     });
  // };

  const submit = e => {
    e.preventDefault();
    // !editing ? postItem() : putItem();
    postItem()
  };

  const editItem = e => {
    dispatch({ type: DELETE_ITEM, payload: e.id });
    setEditID(e.id);
    setEditing(true);
    setButtonText('SAVE ITEM');
    setValues({
      item_name: e.item_name,
    });
  };

  const deleteItem = id => {
    
    axiosWithAuth()
      .delete(`api/foods/${id}`)
      .then(res => {
        console.log('response',res)
        dispatch({ type: DELETE_ITEM, payload: id });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ADD_ITEM_ERROR, payload: err });
      });
  };

  const nextStep = () => {
    props.setCurrentStep('three');
    history.push('/dashboard/new-event/step-three');
  };

  return (
    <section>
      <RenderStepTwo
        value={values.item_name}
        handleChanges={handleChanges}
        loading={eventsState.loading}
        submit={submit}
        state={eventsState.currentEvent.menu_items}
        buttonText={buttonText}
        editItem={editItem}
        deleteItem={deleteItem}
        nextStep={nextStep}
      />
    </section>
  );
};

export default StepTwoContainer;
