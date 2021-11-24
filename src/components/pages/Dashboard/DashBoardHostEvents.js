import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAPI } from '../../hooks/useAPI';
import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR,
    DELETE_EVENT,
    ADD_ITEM_ERROR,
    TOGGLE_EDITING,
    SET_CURRENT_EVENT,
    EDIT_EVENT,
} from '../../../Reducers/eventsReducer';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';

const DashboardHost = () => {
    const eventsState = useSelector(state => state.eventsReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const [moveData] = useAPI({
        method: 'get',
        url: '/api/potlucks',
        data: {},
    });
console.log(eventsState)
    useEffect(() => {
        dispatch({ type: FETCH_DATA_START });
        moveData()
            .then(res => {
                dispatch({ type: FETCH_DATA_SUCCESS, payload: res });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: FETCH_DATA_ERROR, payload: err });
            });
    }, []);

    const editEvent = e => {
        console.log(e);
        dispatch({ type: TOGGLE_EDITING });
        dispatch({ type: EDIT_EVENT, payload: e.id });
        dispatch({ type: SET_CURRENT_EVENT, payload: e.id });
        history.push('/dashboard/new-event');
    };

    const deleteEvent = e => {
        axiosWithAuth()
            .delete(`/event/${e.id}`)
            .then(res => {
                dispatch({ type: DELETE_EVENT, payload: e.id });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: ADD_ITEM_ERROR, payload: err });
            });
    };

    return (
        <section>
            <h2>Events You're Hosting</h2>
            <ul>
                {eventsState.events.map(event => (
                    <li key={event.event_id} onClick={() => editEvent(event)}>
                        <span className="itemList">
                            <span
                                className="delete"
                                onClick={e => {
                                    e.stopPropagation();
                                    deleteEvent(event.event_id);
                                }}
                            >
                                X&nbsp;&nbsp;
                            </span>
                            {event.event_title}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default DashboardHost;
