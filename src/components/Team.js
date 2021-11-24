import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const StyledTeam = styled.div`
    box-sizing: border-box;

    .whole {
        width: 100%;
        height: 100%;
        background-color: #D9D9D9;
    }

    .main {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 2%;
    }

    img {
        width: 300px;
        height: 300px;
    }
    
    .card {
        width: 300px;
        padding: 1%;
        box-shadow: 5px 10px #284b63;
        border: 1px solid black;
        margin-bottom: 2%;
        margin-right: 1%;
    }
    .card p {
        text-align: center;
    }

    .heading h1 {
        font-size: 50px;
        color: white;
        flex-direction: row;
        background-color: #284b63;
        box-shadow: 5px 5px gray;
        width: 35%;
        margin: 0 auto;
    
    }

    h2 {
        text-align: left;
        color: #284b63;
        margin: 0;
     }

    h3 {
        text-align: center;
        color: #284b63;
        font-size: 12px;
    }

    header {
        margin-bottom: 2%;
    }

    @media (max-width: 500px) {
        #hide {
            display: none;
        }
    }

    @media (max-width: 800px) {
        #hide {
            display: none;
        }
    }
`

export default function Team() {
    return (
        <StyledTeam>
            <div className='whole'>
                <header>
                    <h1 id='hide'>POTLUCK PLANNER</h1>
                    <nav>
                        <span className="navspans"><Link to="/">Home</Link></span>
                        <span className="navspans"><Link to="/dashboard">DashBoard</Link></span>
                        <span className="navspans"><Link to="/my-profile">My&nbsp;Profile</Link></span>
                        <span className="navspans"><Link to="/meet-team">Meet&nbsp;our&nbsp;Team</Link></span>
                    </nav>
                </header>

                <div className='heading'>
                    <h1>Meet Our Team</h1>
                </div>

                <div className='main'>

                <div className='card'>
                        <img
                            className='card-photo'
                            src='https://avatars.githubusercontent.com/u/16638790?v=4'
                            alt='profile pic for rick'
                        />
                        <h2>Rick Mansfield</h2>
                        <h3>Full Stack Developer | Fontend Team Lead</h3>
                        {/* <h3>Connected Frontend UI and Backend Database</h3>
                    <h3>Create Base Organization/Repositories on GitHub</h3>
                    <h3>Set up initial React Project and File Structure</h3>
                    <h3>Create CRUD applications for functionality</h3> */}
                    </div>
                    <div className='card'>
                        <img
                            className='card-photo'
                            src='https://avatars.githubusercontent.com/u/86528475?v=4'
                            alt='profile pic of tranequa'
                        />
                        <h2>TraNequa Fauntleroy</h2>
                        <h3>Frontend UI Development</h3>
                    </div>
                    <div className='card'>
                        <img
                            className='card-photo'
                            src='https://ca.slack-edge.com/ESZCHB482-U0225RMJSEP-ec230f40698d-512'
                            alt='profile pic for monica'
                        />
                        <h2>Monica Salas</h2>
                        <h3>Frontend UI Development</h3>

                    </div>
                    <div className='card'>
                        <img
                            className='card-photo'
                            src='https://ca.slack-edge.com/ESZCHB482-U024A8UD2AE-816de42995b0-512'
                            alt='profile of jonah'
                        />
                        <h2>Jonah Tillman</h2>
                        <h3>Frontend UI Development</h3>
                    </div>



                    <div className='card'>
                        <img
                            className='card-photo'
                            src='https://ca.slack-edge.com/ESZCHB482-U021QR009N3-3544844f0026-512'
                            alt='profile-pic'
                        />
                        <h2>Dharmik Savaliya</h2>
                        <h3>Full Stack Developement coordination</h3>

                    </div>
                    <div className='card'>
                        <img
                            className='card-photo'
                            src='https://picsum.photos/302'
                            alt='profile-pic'
                        />
                        <h2>Derek Oh</h2>
                        <h3>Frontend Developer</h3>
                    </div>
                    <div className='card'>
                        <img
                            className='card-photo'
                            src='https://avatars.githubusercontent.com/u/61172495?v=4'
                            alt='profile pic for connor'
                        />
                        <h2>Connor Rayburn</h2>
                        <h3>Backend Database Developement</h3>
                    </div>
                    <div className='card'>
                        <img
                            className='card-photo'
                            src='https://avatars.githubusercontent.com/u/77372140?v=4'
                            alt='profile pic for amanuel'
                        />
                        <h2>Amanuel Gilay</h2>
                        <h3>Backend Database Developement</h3>
                    </div>
                    <div className='card'>
                        <img
                            className='card-photo'
                            src='https://avatars.githubusercontent.com/u/81659057?v=4'
                            alt='profile pic for cara'
                        />
                        <h2>Cara Locke</h2>
                        <h3>Full Stack Consultant</h3>
                    </div>
                </div>
            </div>
        </StyledTeam>

    )
}