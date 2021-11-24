import styled from 'styled-components';

const StyledRegistration = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-evenly;
    margin: 20px;
    height: 80vh;
    width: 95%;
    border: 1px solid black;
    
    img {
        width: 400px;
        height: 300px;
        margin-top: 20px;
    }

    .introduction {
        
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 45px;
        width: 50%;
        border: 1px solid red;
    }

    .form {
        
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        justify-content: center;
        padding: 10px;
        width: 50%;
        border: 3px solid green;
    }
    .input-box {
        height: 60vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    input {
        text-align: center;
    }

    button {
        border-radius: 25px;
        width: 80%;
        height: 40px;
        font-size: 1.3rem;
        color: white;
        font-weight: 700;
        background: rgb(34, 193, 195);
        background: linear-gradient(90deg, rgba(34, 193, 195, 1) 0%, #284B63 100%);
        border: 0px;
        cursor: pointer;
        transition: opacity 0.25s ease-out;
    }
    button:hover {
        opacity: 0.85;
    }

    /* media queries */
    @media (max-width: 900px){
        img {
            height: 250px;
            width: 300px;
        }
    }

    @media (max-width: 650px){
        img {
            height: 200px;
            width: 250px;
        }
    }

    @media (max-width: 500px) {
        img{
            height: 150px;
            width: 200px;
        }
    }
    
`
export default StyledRegistration;