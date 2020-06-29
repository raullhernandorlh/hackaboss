const axios = require('axios');

const email = 'andres@hboss.com'
const password = '1234';

const baseURL = 'http://localhost:8000';

const register = async(email, password) => {
    const response = await axios.post(`${baseURL}/user/`, {
        email, 
        password
    });
}

const login = async (email, password) => {
    const response = await axios.post(`${baseURL}/user/login`, {
        email, 
        password
    });

    return response.data.token;
}

const list = async (token) => {
    const response = await axios.get(`${baseURL}/event`, {
        headers: {authorization: token}
    })

    return response.data;
}

const add = async (token,  name, artist, type) => {

/*    axios({
        method: 'post',
        url: `${baseURL}/event`,
        headers: {authorization: token},
        data: {
            name, artist, type
        }
    })*/

    const dataBody = {name, artist, type}
    const requestConfig = {
        headers: {authorization: token}
    }
    const response = await axios.post(
        `${baseURL}/event`,
        dataBody,
        requestConfig
    )
}

(async () => {

    console.log(process.argv);

    try {
        await register(email, password);
        const token = await login(email, password);

        await add(token, 'Marea - gira verano', 'Los marea', 'Concierto');
        const events = await list(token);

        console.log(events);

    } catch(e) {
        console.log(e.response.status)
    }

})();
