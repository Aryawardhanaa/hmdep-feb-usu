import { useState } from "react";
import { baseURL } from "../api";
import axios from "axios";

const apiUrl = baseURL + '?action=insert';
const mutationOptions = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        "Content-Type": "text/plain;charset=utf-8",
    },
    // credentials: 'same-origin',
    withCredentials: true,
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    "Content-Type": "text/plain;charset=utf-8",
    mode: 'no-cors'
};

const useMutation = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const mutate = async (body) => {
        setIsLoading(true);
        fetch(apiUrl, {
            redirect: "follow", headers: {
                "Content-Type": "text/plain;charset=utf-8",
            }, method: 'POST', body: JSON.stringify(body)
        })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        // try {
        //     const response = await axios.post(apiUrl, JSON.stringify(payload), mutationOptions);
        //     setData(response.data);
        // } catch (err) {
        //     setError(err);
        // } finally {
        //     setIsLoading(false);
        // }
    };

    return { data, error, isLoading, mutate };
};


export default useMutation;