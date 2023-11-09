import { render } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('should render', () => {
    const { getByText } = render(<HomePage />);

    expect(getByText('Search countries')).toBeInTheDocument();
  });
});
