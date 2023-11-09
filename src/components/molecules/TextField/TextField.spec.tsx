import { fireEvent, render } from '@testing-library/react';
import { TextField } from './TextField';

describe('TextField', () => {
  let mockOnChange: any;

  beforeEach(() => {
    mockOnChange = jest.fn();
  });

  it('should render', () => {
    const { getByDisplayValue } = render(
      <TextField
        id={'Id'}
        label={'Label'}
        name={'Test'}
        placeholder={'placeholder'}
        value={'testValue'}
        onChange={mockOnChange}
      />
    );

    expect(getByDisplayValue('testValue')).toBeInTheDocument();
  });

  it('should change value', () => {
    const { getByPlaceholderText } = render(
      <TextField
        id={'Id'}
        label={'Label'}
        name={'Test'}
        placeholder={'placeholder'}
        value={'testValue'}
        onChange={mockOnChange}
      />
    );

    const inputElement = getByPlaceholderText('placeholder');
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'test2' } });

    expect(mockOnChange).toHaveBeenCalled();
  });
});
