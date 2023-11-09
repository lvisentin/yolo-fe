import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
  it('should render', () => {
    const { getByText } = render(<Label name={'Test'} label={'Label'} />);

    expect(getByText('Label')).toBeInTheDocument();
  });
});
