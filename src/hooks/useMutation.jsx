import { useState } from "react";
import { baseURL } from "../api";
import axios from "axios";

const apiUrl = baseURL + '/kritik';
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
        // const { nama, email, subjek, pesan } = body

        try {
            const response = await axios.post(apiUrl, body);
            console.log(response.data);
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    return { data, error, isLoading, mutate };
};


export default useMutation;