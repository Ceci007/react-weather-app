import { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getWoeid = async (location) => {
    const { data } = await axios(`${REQUEST_URL}/search`, { params: { query: location }})

    if(!data || data.length === 0) {
      setError('There is no such location');
      return;
    } 

    return data;
  }

  const getForecastData = async (woeid) => {
    const { data } = await axios(`${REQUEST_URL}/${woeid}`);
    if(!data || data.length === 0) {
      setError('Something went wrong');
      return;
    }

    return data;
  }

  const submitRequest = async (location) => {
    const response = await getWoeid(location);
    const data = await getForecastData(response[0].woeid);

    console.log({ data });
  }

  return {
    error,
    loading,
    forecast,
    submitRequest,
  }
}

export default useForecast;