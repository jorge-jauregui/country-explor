import React, { ReactElement, useEffect } from 'react';
import './App.css';
import axios, { AxiosRequestConfig } from 'axios';

const App: React.FC = (): ReactElement => {
  // World Bank API information: https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information
  const options: AxiosRequestConfig<any> = {
    method: 'GET',
    url: 'https://api.worldbank.org/v2/country/BRA/indicator/NY.GDP.MKTP.CD?format=json',
  };

  const getGDPData = () => {
    axios.request(options).then(function (response) {
      console.log("res", response.data)
    }).catch(function (error) {
      console.error(error)
    });
  }

  useEffect(() => {
    getGDPData()
  })

  return (
   <div>Hello world</div>
  );
}

export default App;
