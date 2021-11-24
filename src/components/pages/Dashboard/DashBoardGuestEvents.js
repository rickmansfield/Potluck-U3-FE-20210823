import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { TOGGLE_EDITING } from "";

const DashboardGuest = () => {
  // const eventsState = useSelector((state) => state.eventsReducer);
  const history = useHistory();
  // const dispatch = useDispatch();

  const rsvp = () => {
    // dispatch({ type: TOGGLE_EDITING });
    history.push("/dashboard/guest-rsvp");
  };

  return (
    <section>
      <h2>Events You're Attending</h2>
      <button key="event-id" onClick={() => rsvp(163)} className="itemList">
        Picnic
      </button>
      {/* {eventsState.events.map(event => (
          <li key={event.event_id}>
            <span className="itemList">
              <span
                className="delete"
                onClick={e => {
                  e.stopPropagation();
                  // props.deleteItem(item.id);
                }}
              >
                X&nbsp;&nbsp;
              </span>
              {event.event_title}
            </span>
          </li>
        ))} */}
    </section>
  );
};

export default DashboardGuest;
