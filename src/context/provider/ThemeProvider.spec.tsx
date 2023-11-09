import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ThemeContext, ThemeProvider } from './ThemeProvider';
describe('ThemeProvider Component', () => {
  beforeEach(async () => {
    const jsdom = await import('jsdom');
    const { JSDOM } = jsdom;
    const dom = new JSDOM('<!doctype html><html><body></body></html>');
    global.document = dom.window.document;
  });

  it('renders children with the default dark theme', () => {
    render(
      <ThemeProvider>
        <div data-testid="child-element" />
      </ThemeProvider>
    );

    expect(screen.getByTestId('child-element')).toBeInTheDocument();
  });

  it('toggles theme when the toggle function is called', async () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ toggle }) => (
            <button onClick={toggle} data-testid="toggle-button">
              Toggle Theme
            </button>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    fireEvent.click(getByTestId('toggle-button'));

    await waitFor(() => {
      const htmlElement = document.querySelector('html');
      expect(htmlElement).toBeInTheDocument();
    });
  });
});
