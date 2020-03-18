import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID b44039fba0a56a989b9ed5edce4798f05b61884fa499fd0957c4bc687ccfab76'
    }
});





