import { useState } from 'react'

const useForecast = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const submitRequest = (location) => {
    console.log({ location });
  }

  return {
    error,
    loading,
    forecast,
    submitRequest,
  }
}

export default useForecast;