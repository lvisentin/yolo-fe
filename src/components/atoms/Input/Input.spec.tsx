import { fireEvent, render } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  let mockOnChange: any;

  beforeEach(() => {
    mockOnChange = jest.fn();
  });

  it('should render', () => {
    const { getByDisplayValue } = render(
      <Input
        id={'Id'}
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
      <Input
        id={'Id'}
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
