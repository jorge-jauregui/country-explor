import axios, { AxiosRequestConfig } from "axios";
import { CountryGDP } from "./constants";

export const getCountryGDP = async(countryAbbreviation: string): Promise<CountryGDP[]> => {
  console.log("here", countryAbbreviation)
  const countryGDPOptions: AxiosRequestConfig = {
    method: 'GET',
    url: `https://api.worldbank.org/v2/country/${countryAbbreviation}/indicator/NY.GDP.MKTP.CD?format=json`,
  };
  return axios.request(countryGDPOptions).then((res) => res.data[1])
}

