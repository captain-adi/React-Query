import React from 'react'
import "./App.css"
import { useFetchData } from './hook'
import { API_CONFIG } from './api/api_confige'
const App = () => {
const {data,isError,isFetched,isLoading} = useFetchData(API_CONFIG.BASE_URL,API_CONFIG.FACT_END_POINT);
if(isLoading){
  return <h1>loading.....</h1>
}
if(isError){
  return <h1>something went wrong</h1>
}
  return (
   <div className="container">
  {data.map((t, index) => (
    <div className="card" key={index}>
      <h1 className="title">{t.name}</h1>
      <p className="description">{t.description}</p>
    </div>
  ))}
</div>

  )
}

export default App
