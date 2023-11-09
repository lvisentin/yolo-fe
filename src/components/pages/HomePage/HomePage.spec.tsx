import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import {
  RenderResult,
  act,
  fireEvent,
  render,
  waitFor
} from '@testing-library/react';
import App from '../../../App';
import {
  getCountriesMock,
  getUsMock
} from '../../../fixtures/CountryMocks';

async function renderHomePage(
  mocks: MockedResponse<any>[]
): Promise<RenderResult> {
  return act(async () =>
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    )
  );
}

describe('HomePage', () => {
  it('should render with a textfield', async () => {
    const { getByPlaceholderText } = await renderHomePage([getCountriesMock]);

    expect(getByPlaceholderText('Type a country code')).toBeInTheDocument();
  });

  it('should render a text field for the country code', async () => {
    const { getByPlaceholderText } = await renderHomePage([getCountriesMock]);

    expect(getByPlaceholderText('Type a country code')).toBeInTheDocument();
  });

  it('should fetch the countries when the country code changes', async () => {
    const { getByPlaceholderText, findAllByRole } = await renderHomePage([
      getUsMock,
      getCountriesMock,
    ]);

    const textField = getByPlaceholderText('Type a country code');
    fireEvent.change(textField, { target: { value: 'US' } });

    await waitFor(async () => {
      const tableRows = await findAllByRole('row');
      expect(tableRows.length).toBe(2);
    });
  });

  it('should render a table of countries when the countries are loaded', async () => {
    const { findAllByRole } = await renderHomePage([getCountriesMock]);

    const tableRows = await findAllByRole('row');
    expect(tableRows.length).toBe(3);
  });
});
