// filepath: d:\web\React JS\Raect Query\src\App.jsx
import React from 'react'
import "./App.css"
import { useQuery } from 'react-query'
import { API_CONFIG } from './api/api_confige'

const fetchRandomData = async () => {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.FACT_END_POINT}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

const App = () => {
  const { data, error, isLoading } = useQuery('randomData', fetchRandomData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Hello</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App