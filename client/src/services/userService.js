import axios from 'axios';

const baseUrl = "http://localhost:3010";

export function signup(values) {
    console.log(values)
    return axios.post(baseUrl + "/signup", values
    ).then((res) => {
        return res.data;
    }).catch(err => {
        throw err
    })
}

export function signin(values) {

    return axios.post(baseUrl + "/signin", values
    ).then((res) => {
        return res.data;
    }).catch(err => {
        throw err
    })
}