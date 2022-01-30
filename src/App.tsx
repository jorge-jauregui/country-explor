import React, { ReactElement, useEffect, useState } from 'react';
import './App.css';
import { getCountryGDP } from './store/actions';
import { CountryGDP } from './store/constants';


const App: React.FC = (): ReactElement => {

  const [latestGDP, setLatestGDP] = useState<CountryGDP | undefined>(undefined)

  useEffect(() => {
    getCountryGDP("BRA").then((res) => {
      setLatestGDP(res[0])
    })
  }, [])

  return (
   <div>
     {latestGDP ? <div>{latestGDP.country.value}</div> : []}
   </div>
  );
}

export default App;
