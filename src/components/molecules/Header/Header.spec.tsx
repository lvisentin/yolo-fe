import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from '../../../context/provider/ThemeProvider';
import Header from './Header';

describe('Header Component', () => {
  it('should render the header with dark and click to have it light', async () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    fireEvent.click(getByRole('button'));
    await waitFor(() => {
      expect(getByRole('button')).toHaveTextContent('LIGHT');
    });
  });

  it('should render the header with dark theme', async () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(getByRole('button')).toHaveTextContent('DARK');
    });
  });

  it('calls toggle function when theme button is clicked', async () => {
    const mockToggle = jest.fn();

    jest.spyOn(React, 'useContext').mockImplementation(() => ({
      theme: 'light',
      toggle: mockToggle,
    }));

    const { getByRole } = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    fireEvent.click(getByRole('button'));
    await waitFor(() => {
      expect(mockToggle).toHaveBeenCalled();
    });
  });
});
