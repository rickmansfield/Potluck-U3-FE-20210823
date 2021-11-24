import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../../index.css';
// import { states } from '../../constants/index';
import { useForm } from '../../hooks/useForm';
// import { useAPI } from '../../hooks/useAPI';
// import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import { useDispatch } from 'react-redux';
// import Dropdown from '../../DropDown';
import {
    
    USER_EVENT_SUCCESS,
    USER_EVENT_ERROR,
} from '../../../Reducers/userReducer';
import StyledRegistration from './Styling';
import axios from 'axios';



const initialFormValues = {
    // first_name: '',
    // last_name: '',
    // email: '',
    // address_one: '',
    // address_two: '',
    // city: '',
    // state: '',
    // zip: '',
    // password: '',
    username: "",
    password: ""
};

function RenderLandingPage(props) {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the Login route

    const dispatch = useDispatch();
    // const state = useSelector(state => state.userReducer);
    const [values, resetForm] = useForm(initialFormValues);
    const [anyValue, setAnyvalue] = useState("");
    let history = useHistory();
    // const [data, moveData, error] = useAPI({
    //     method: 'post',
    //     url: '/user/register',
    //     data: anyValue,

    // });



    const postRegister = () => {
        // dispatch({ type: USER_EVENT_START });
        axios
            .post('https://potluck-planner-2.herokuapp.com/api/auth/register', anyValue)
            .then(res => {
                // console.log("XXXX SEE ME XXXX", res);
                localStorage.setItem('token', res.token);
                dispatch({
                    type: USER_EVENT_SUCCESS,
                    payload: res.user,
                });
                // console.log(state);
                history.push('/dashboard');
                resetForm();
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: USER_EVENT_ERROR, payload: err });
            });
    };

    // const register = e => {
    //     e.preventDefault();
    //     // console.log(values);
    //     postRegister();
    // };

    const clever = event => {
        // console.log('',event.target.name);
        // console.log('', event.target.value);
        setAnyvalue({
            ...anyValue,
            [event.target.name]: event.target.value
        });
    };
    // console.log('clever HERE: ', anyValue);
    return (

        <>
            <div className="page">

                <header>
                    <h1>POTLUCK PLANNER</h1>
                    <nav>
                        <Link to="/login"> Login</Link>
                        <span className="navspans"></span>
                        <Link to="/dashboard">DashBoard</Link>
                        <span className="navspans"></span>
                        <Link to="/my-profile">My&nbsp;Profile</Link>
                        <span className="navspans"></span>
                        <Link to="/meet-team">Meet&nbsp;our&nbsp;Team</Link>
                    </nav>
                </header>

                <StyledRegistration>

                    <div className="introduction">

                        <h1>Welcome to Potluck Planner</h1>

                        <p>
                            an easy way to figure out
                            who’s bringing what to your next potluck
                        </p>
                        <img src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt='potluck table' />
                    </div>
                    <div className="form">
                        <section>
                            <h2>Create an Account to Get Started!</h2>
                            <div>
                                <form>
                                    <input
                                        type="text"
                                        required
                                        name="username"
                                        placeholder="User name"
                                        value={anyValue.username}
                                        onChange={clever}
                                    />
                                    {/* the following lines of code are for a later date ignore but leave it here */}
                                    {/* <input
                                        type="text"
                                        required
                                        name="last_name"
                                        placeholder="Last Name"
                                        value={values.last_name}
                                        onChange={handleChanges}
                                    /> */}

                                    {/* <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={handleChanges}
                                    />
                                </div> */}

                                    {/* <div className='input-box'> */}
                                    {/* <input
                                            type="text"
                                            name="address_one"
                                            placeholder="Address 1"
                                            value={values.address_one}
                                            onChange={handleChanges}
                                        /> */}
                                    {/* <input
                                            type="text"
                                            name="address_two"
                                            placeholder="Address 2"
                                            value={values.address_two}
                                            onChange={handleChanges}
                                        /> */}
                                    {/* <input
                                            type="text"
                                            name="city"
                                            placeholder="City"
                                            value={values.city}
                                            onChange={handleChanges}
                                        />
                                        <input
                                            type="text"
                                            name="zip"
                                            placeholder="Zip Code"
                                            value={values.zip}
                                            onChange={handleChanges}
                                        /> */}

                                    {/* <Dropdown
                                        data={states}
                                        name="state"
                                        value={values.state}
                                        onChange={handleChanges}
                                    /> */}
                                    {/* </div> */}

                                    {/* <div className='input-box'> */}
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        value={anyValue.password}
                                        onChange={clever}
                                    />

                                    {/* the code below is an alternative to Yup and is very tricky. 
                                    It ONLY takes STRINGS it will disable all buttons if the form inputs are not strings. 
                                    DO NOT USE this unless you fully understand my /loading component.  */}

                                    {/* {!state.loading ? (
                                    <button onClick={()=>somedam}>CREATE MY ACCOUNT</button>
                                ) : (
                                    <button disabled>Loading...</button>
                                )} */}

                                </form>

                            </div>
                            <button onClick={postRegister}>CREATE MY ACCOUNT</button>


                        </section>
                    </div>
                </StyledRegistration>
            </div>
        </>
    );
}
export default RenderLandingPage;
