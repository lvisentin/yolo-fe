import { render } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('should render', () => {
    const { getByText } = render(<HomePage />);

    expect(getByText('Search countries')).toBeInTheDocument();
  });

  it('should render a textfield', () => {
    const { getByPlaceholderText } = render(<HomePage />);

    expect(getByPlaceholderText('Type a country code')).toBeInTheDocument();
  });
});
