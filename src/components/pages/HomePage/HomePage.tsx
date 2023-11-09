import { Country } from '../../../types/Country';
import DataTable, {
  DataTableColumn,
} from '../../molecules/DataTable/DataTable';
import { TextField } from '../../molecules/TextField/TextField';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GetCountriesQuery } from '../../graphql/GetCountries.query';
import { useDebounce } from '../../../hooks/useDebounce';

function HomePage() {
  const [countryCode, setCountryCode] = useState<string>('');
  const tableColumns: DataTableColumn<keyof Country>[] = [
    {
      name: 'Code',
      field: 'code',
    },
    {
      name: 'Name',
      field: 'name',
    },
  ];
  const { data, loading, refetch } = useQuery(GetCountriesQuery);

  const debouncedCountryCode = useDebounce(countryCode, 200);

  useEffect(() => {
    if (debouncedCountryCode) {
      refetch({ code: { in: debouncedCountryCode } });
      return;
    }

    refetch({ code: undefined });
  }, [debouncedCountryCode, refetch]);

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-[50%] mx-auto">
      <h1>Search countries</h1>

      <TextField
        value={countryCode}
        id="countryCode"
        name="countryCode"
        onChange={(e) => setCountryCode(e.target.value)}
        label="Country Code"
        placeholder="Type a country code"
      />

      {loading ? (
        <div className="flex items-center justify-center h-full mt-8">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : data?.countries && data?.countries?.length > 0 ? (
        <div className="">
          <DataTable columns={tableColumns} values={data?.countries} />
        </div>
      ) : (
        'We didnt find any countries with that code'
      )}
    </div>
  );
}

export default HomePage;
