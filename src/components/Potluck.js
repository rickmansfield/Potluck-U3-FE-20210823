import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Potluck = () => {
    const defaultState = {
        name: '',
        date: '',
        time: '',
        location: '',
        items: false
    }

    const [host, setHost] = useState([]);
    const [formState, setFormState] = useState(defaultState);
    const [errors, setErrors] = useState(defaultState);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        if (formState.name) {
            setButtonDisabled(!formState.name);
        }
    }, [formState]);

    const formSubmit = evt => {
        evt.preventDefault();
        console.log('Form Submitted!');
        /* this will need to be updated to the actual api*/
        axios.post('http://localhost:5000/api/', formState)
        .then(res => {
            setHost(res.data)
            // console.log(res.data);
            // console.log('Submit Success', res);
        })
        .catch(err => console.log(err));
    };

    const inputChange = evt => {
        const value = 
            evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        setFormState({...formState, [evt.target.name]: value});
    }

    return (
        <div className='Potluck'>
            <h2>My Potluck</h2>
            <h4>--share your info and potluck preferences below--</h4>
            <form onSubmit={formSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' onChange={inputChange} value={formState.name} />

                <label htmlFor='date'>Date</label>
                <input type='date' min='2021-01-01' max='2025-12-31'  name='date' onChange={inputChange} value={formState.date} />

                <label htmlFor='time'>Time</label>
                <input type='time' name='time' onChange={inputChange} value={formState.time} />

                <label htmlFor='location'>Location</label>
                <input type='text' name='location' onChange={inputChange} value={formState.location} />
                <br></br>
                <br></br>
                <label htmlFor='items'>Potluck Dishes</label>
                <br></br>
                <div className='Potluck-items'>
                    <input className='drinks' name='items' type='checkbox' onChange={inputChange} value={formState.items} />
                        Drinks
                </div>
                <br></br>
                <div>
                    <input className='entree' name='items' type='checkbox' value='entree'/>
                    Entree
                </div>
                <br></br>
                <div>
                    <input className='appetizers' name='items' type='checkbox' value='appetizers'/>
                    Appetizers
                </div>
                <br></br>
                <div>
                    <input className='sides' name='items' type='checkbox' value='sides'/>
                    Sides
                </div>
                <br></br>
                <div>
                    <input className='desserts' name='items' type='checkbox' value='desserts'/> 
                    Dessert
                </div>
                <br></br>

                <button id='submit' disabled={buttonDisabled}>Enter</button>
            </form>
        </div>
    )
}

export default Potluck;

