import { Country } from '../types/Country';
import { TypedDocumentNode, gql } from '@apollo/client';

export type GetCountriesVariables = {
  code: { in: string };
};

export const GetCountriesQuery: TypedDocumentNode<
  { countries?: Country[] },
  GetCountriesVariables
> = gql`
  query GetCountries($code: StringQueryOperatorInput) {
    countries(filter: { code: $code }) {
      code
      name
    }
  }
`;
