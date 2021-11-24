//I feel strongly that having api's in one spot will clean up code and workflow. 
//Hopefully any time we make an HTTP req it is in the 'index.js' firl in this directory
//Note to Self... be sure to export the logic out so it can be imported where ever that function is called in our app
//My hope is to build out reusable CRUD function here eventually. 
import axios from 'axios';

// we will define a bunch of API calls here.... gulp I hope ~Rick
const apiUrl = `${process.env.REACT_APP_API_URI}/profiles`;

const sleep = time =>
    new Promise(resolve => {
        setTimeout(resolve, time);
    });

const getAuthHeader = authState => {
    if (!authState.isAuthenticated) {
        throw new Error('Not authenticated');
    }
    return { Authorization: `Bearer ${authState.idToken}` };
};

const getDSData = (url, authState) => {

    // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
    const headers = getAuthHeader(authState);
    if (!url) {
        throw new Error('No URL provided');
    }
    return axios
        .get(url, { headers })
        .then(res => JSON.parse(res.data))
        .catch(err => err);
};

const apiAuthGet = authHeader => {
    return axios.get(apiUrl, { headers: authHeader });
};

const getProfileData = authState => {
    try {
        return apiAuthGet(getAuthHeader(authState)).then(response => response.data);
    } catch (error) {
        return new Promise(() => {
            console.log(error);
            return [];
        });
    }
};

export { sleep, getProfileData, getDSData };