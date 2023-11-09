import { GetCountriesQuery } from '../components/graphql/GetCountries.query';

export const mockCountries = [
  {
    code: 'US',
    name: 'UnitedStates',
  },
  {
    code: 'BR',
    name: 'Brazil',
  },
];

export const getNoCountriesMock = {
  request: {
    query: GetCountriesQuery,
    variables: { in: 'XXXXX' },
  },
  result: {
    data: {
      countries: [],
    },
  },
};

export const getCountriesMock = {
  request: {
    query: GetCountriesQuery,
    variables: {},
  },
  result: {
    data: {
      countries: mockCountries,
    },
  },
};

export const getUsMock = {
  request: {
    query: GetCountriesQuery,
    variables: {
      code: { in: 'US' },
    },
  },
  result: {
    data: {
      countries: [
        {
          code: 'US',
          name: 'UnitedStates',
        },
      ],
    },
  },
};
