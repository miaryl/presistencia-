import axios from "axios";

export const api = () =>{
    const url = "http://localhost:3000/names";

    const getNames = () =>{
        const response = axios.get(url);
        return response;
    }

    const createName = (data)=>{
        const response = axios.post(url,data);
        return response;
    }

    return {
        getNames,
        createName
    }
}