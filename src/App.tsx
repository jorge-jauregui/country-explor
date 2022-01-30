import { Autocomplete, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { ReactElement, useEffect, useState } from 'react';
import './App.css';
import { getCountryGDP } from './store/actions';
import { countries, CountryGDP } from './store/constants';


const App: React.FC = (): ReactElement => {

  const [latestGDP, setLatestGDP] = useState<CountryGDP | undefined>(undefined)
  const [countryAbbreviation, setCountryAbbreviation] = useState<string>("")

  useEffect(() => {
    getCountryGDP("ALB").then((res) => {
      setLatestGDP(res[0])
    })
  }, [])

  return (
   <div>
     {latestGDP ? <div>{latestGDP.country.value}</div> : []}
     <Autocomplete
      id="country-select"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.abbreviation.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.abbreviation.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.abbreviation})
        </Box>
      )}
      onChange={(_, v) => {if (v) {setCountryAbbreviation(v.abbreviation)}}}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
    <Button onClick={() => {getCountryGDP(countryAbbreviation)}}>Go</Button>
   </div>
  );
}

export default App;
