import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../src/components/hooks/useForm';
import { useAPI } from '../../src/components/hooks/useAPI';
import {
  EVENT_DATA_START,
  EVENT_DATA_SUCCESS,
  EVENT_DATA_ERROR,
  RSVP_ADD_ITEM,
} from '../Reducers/eventsReducer';

const state = {
  id: 123,
  date: '2021-08-28',
  event_title: 'Picnic',
  address_one: '1234',
  address_two: 'Apt 107',
  city: 'Grafton',
  state: 'Wisconsin',
  zip: '53024',
  contact_phone: '2061234567',
  start_time: '4:00',
  end_time: '5:00',
  special_instructions: 'Park out front',
  user_id: 26,
  host: {
    first_name: 'Rick',
    last_name: 'Mansfield',
    email: 'RicksMyCodeGuy@gmail.com',
  },
  menu_items: [
    {
      id: 1,
      item_name: 'Chips',
      event_id: 123,
      guest_id: null,
    },
    {
      id: 2,
      item_name: 'dip',
      event_id: 123,
      guest_id: null,
    },
    {
      id: 3,
      item_name: 'Cupcakes',
      event_id: 123,
      guest_id: null,
    },
  ],
  guests: [
    {
      id: 20,
      first_name: 'TraNequa',
      email: 'shecodes@nenethecreative.com',
      rsvp_pending: true,
      attending: false,
      event_id: 123,
      user_id: null,
    },
  ],
};

const initialFormValues = {
  attending: false,
};

const GuestRsvp = () => {
  const eventsState = useSelector(state => state.eventsReducer);
  const dispatch = useDispatch();
  const [values, handleChanges] = useForm(initialFormValues);
  const [moveData] = useAPI({
    method: 'get',
    url: '/event/163',
    data: {},
  });

  useEffect(() => {
    dispatch({ type: EVENT_DATA_START });
    moveData()
      .then(res => {
        dispatch({ type: EVENT_DATA_SUCCESS, payload: res });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: EVENT_DATA_ERROR, payload: err });
      });
  }, []);

  const addItem = item => {
    console.log(item);
    dispatch({ type: RSVP_ADD_ITEM, payload: item });
  };

  const submit = e => {
    e.preventDefault();
  };

  return (
    <section>
      <form onSubmit={submit}>
        <div className="formContainer">
          <div className="formColumn">
            <h2>You're invited to: {state.event_title}</h2>
            <h3>
              Hosted by: {state.host.first_name} {state.host.last_name}
            </h3>
            <p>
              Date: {state.date}
              <br />
              Address: {state.address_one} {state.address_two}
              <br />
              Start Time: {state.start_time}
              <br />
              Start Time: {state.end_time}
              <br />
            </p>
            <p>
              <input
                type="checkbox"
                name="attending"
                checked={values.attending === true}
                onChange={handleChanges}
              />
              &nbsp; Yes, I will be attending.
            </p>
            <div>
              <h4>Select What You Want To Bring</h4>
              <ul>
                {state.menu_items.map(item => (
                  <li key={item.id} onClick={() => addItem(item)}>
                    <span className="itemList">{item.item_name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="formColumn"></div>
          <h4>You have selected...</h4>
          <ul>
            {eventsState.rsvpAddItem.map(item => (
              <li key={item.id}>
                <span className="itemList">{item.item_name}</span>
              </li>
            ))}
          </ul>
          <div>
            <button>CONFIRM ATTENDANCE</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default GuestRsvp;
