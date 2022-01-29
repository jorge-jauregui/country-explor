import React, { ReactElement, useEffect, useState } from 'react';
import './App.css';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface CountryGDP {
  country: {id: string, value: string}
  countryiso3code: string
  date: string
  decimal: number
  indicator: {id: string, value: string}
  obs_status: string
  unit: string 
  value: number

}
const App: React.FC = (): ReactElement => {

  const [_, setCountryGDPs] = useState<AxiosResponse | undefined| CountryGDP>(undefined)
  const [gdp2020, setGDP2020] = useState<CountryGDP | undefined>(undefined)

  // World Bank API information: https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information
  const getCountryGDPOptions: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://api.worldbank.org/v2/country/BRA/indicator/NY.GDP.MKTP.CD?format=json',
  };

  const getCountryGDP = () => {
    axios.request(getCountryGDPOptions).then((res) => {
      const gdps = res.data[1]
      setCountryGDPs(gdps)
      setGDP2020(gdps[0])
    }).catch((err) => {
      console.error(err)
    });
  }

  useEffect(() => {
    console.log("gdp2020", gdp2020)
  }, [gdp2020])

  useEffect(() => {
    getCountryGDP()
  }, [])

  return (
   <div>
     {gdp2020 ? <div>{gdp2020.country.value}</div> : []}
   </div>
  );
}

export default App;
