import axios from 'axios';
import { useEffect, useState } from "react";

const useAxios = (param) => {

   // State variables to manage response, loading state, and errors
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Set default base URL for axios requests
  axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

   // Function to fetch data using Axios
  const fetchData = async(param) => {
    try{
        setLoading(true);           // Set loading state to true while fetching data
        const result = await axios(param);
        setResponse(result.data);  // Set the response data if request is successful
    } catch(err) {
        setError(err);            // Set error state if request fails
    } finally {
        setLoading(false);       // Set loading state to false until success or failure
    }
  }

  // useEffect hook to execute fetchData
  useEffect(() =>{
    fetchData(param);   // Trigger fetchData whenever the 'param' value changes
  }, []);

  // Return response, loading state, and error
  return{
    response, loading, error
  };
};

export default useAxios;