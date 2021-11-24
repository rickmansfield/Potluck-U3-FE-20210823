import React from "react";
import styled from "styled-components";

const StyledInputs = styled.div`
  input {
    text-align: center;
    padding: 3% 8%;
    border: none;
    border-radius: 25px;
    margin-bottom: 2%;
  }
`;
const RenderStepThree = (props) => (
  <section>
    <form onSubmit={props.submit}>
      <div className="formContainer">
        <StyledInputs className="formColumn innputone">
          <h2>Who is coming?</h2>
          <input
            type="text"
            name="first_name"
            placeholder="Guest's first name"
            value={props.value.first_name}
            onChange={props.handleChanges}
          />
          <input
            type="text"
            name="email"
            placeholder="Guest's email address"
            value={props.value.email}
            onChange={props.handleChanges}
          />
          <div>
            {!props.loading ? (
              <button>{props.buttonText}</button>
            ) : (
              <button disabled>Loading...</button>
            )}
          </div>
        </StyledInputs>
        <div className="formColumn">
          <div>
            <h2>Guest List</h2>
          </div>
          <div>
            <ul>
              {props.state.map((item) => (
                <li key={item.id} onClick={() => props.editItem(item)}>
                  <span className="itemList">
                    <span
                      className="delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        props.deleteItem(item.id);
                      }}
                    >
                      X&nbsp;&nbsp;
                    </span>
                    {item.first_name}&nbsp;({item.email})
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {props.state.length > 0 ? (
              <button onClick={props.nextStep}>SAVE EVENT</button>
            ) : null}
          </div>
        </div>
      </div>
    </form>
  </section>
);

export default RenderStepThree;
