import { TextField } from '../../molecules/TextField/TextField';
import React, { useState } from 'react';

function HomePage() {
  const [countryCode, setCountryCode] = useState<string>('');

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1>Search countries</h1>

      <TextField
        value={countryCode}
        id="countryCode"
        name="countryCode"
        onChange={(e) => setCountryCode(e.target.value)}
        label="Country Code"
        placeholder="Type a country code"
      />
    </div>
  );
}

export default HomePage;
