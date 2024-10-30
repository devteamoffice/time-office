import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../constants";
const useFetch = (endpoint, queryParams) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`${API_URL}/${endpoint}`, {
          params: queryParams,
        });
        setData(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint, queryParams]);
  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
