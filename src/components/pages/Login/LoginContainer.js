import React,{useState} from "react";

import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { useAPI } from "../../../components/hooks/useAPI";
import { useForm } from "../../../components/hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import {
  USER_EVENT_START,
  USER_EVENT_SUCCESS,
  USER_EVENT_ERROR,
} from "../../../Reducers/userReducer";
import { SET_CURRENT_USER } from "../../../Reducers/eventsReducer";


const initialFormValues = {
  username: "",
  password: "",
};

const StyledHeader = styled.header`
  color: ${({ theme }) => theme.secondaryColor};
`;

const StyledMainPage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1559839826-f52348d3e1c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1585&q=80");
  background-size: cover;
  height: 85.2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: -2%;
    font-size: 3rem;
  }
`;

const StyledChild = styled.div`
  border: 0px;
  border-radius: 30px;
  background-color: #f2f2f2;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  padding: 0 5%;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    input {
      padding: 8%;
      border: none;
      border-radius: 25px;
    }
  }
  button {
    border-radius: 25px;
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
`;
const StyledInputs = styled.div`
  margin-top: -5%;
  padding: 15% 0 15% 0;
  margin-left: -15%;
`;
const LoginPage = () => {
  const dispatch = useDispatch();
  const [errors, setError] = useState(initialFormValues)
  const state = useSelector((state) => state.userReducer);
  const [values, handleChanges, resetForm] = useForm(initialFormValues);
  let history = useHistory();
  const [moveData] = useAPI({
    method: "post",
    url: "/api/auth/login",
    data: values,
  });

  const postLogin = () => {
    dispatch({ type: USER_EVENT_START });
    moveData()
      // axios.post('https://potluck-planner-2.herokuapp.com/api/auth/login', {username: "sue", password:"1234"})
      .then((res) => {
        // console.log("POST Login Resp:", res);
        console.log("TOKEN-YO YO", res);

        localStorage.setItem("token", res.token);
        dispatch({
          type: USER_EVENT_SUCCESS,
          payload: res.username,
        });
        dispatch({
          type: SET_CURRENT_USER,
          payload: res.user_id,
        });
        history.push("/dashboard");
        resetForm();
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: USER_EVENT_ERROR, payload: err });
      });
  };

  const login = (e) => {

    if (initialFormValues.username === '' || initialFormValues.password === '') {
      setError('Both fields are required')
    }

    e.preventDefault();
    postLogin();
  };

  return (
    <>
      <div className="page">
        <StyledHeader>
          <h1>POTLUCK PLANNER</h1>
          <nav>
            <Link to="/landing"> Home</Link>
            <span className="navspans"></span>
            <Link to="/dashboard">DashBoard</Link>
            <span className="navspans"></span>
            <Link to="/my-profile">My&nbsp;Profile</Link>
            <span className="navspans"></span>
            <Link to="/meet-team">Meet&nbsp;our&nbsp;Team</Link>
          </nav>
        </StyledHeader>
        <StyledMainPage>
          <StyledChild>
            <section>
              <h1>Login</h1>
              <form onSubmit={login}>
                <StyledInputs>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={values.email}
                    onChange={handleChanges}
                  />
                </StyledInputs>
                <StyledInputs>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChanges}
                  />
                </StyledInputs>
                {!state.loading ? (
                  <button>Log In</button>
                ) : (
                  <button disabled>Loading...</button>
                )}
              </form>
            </section>
          </StyledChild>
        </StyledMainPage>
      </div>
    </>
  );
};

export default LoginPage;
