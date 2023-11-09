import { render } from '@testing-library/react';
import { HomepageTemplate } from './HomepageTemplate';

describe('HomepageTemplate', () => {
  it('should render the content inside', () => {
    const { getByText } = render(
      <HomepageTemplate>
        <span>Homepagetemplate</span>
      </HomepageTemplate>
    );

    expect(getByText('Homepagetemplate')).toBeInTheDocument();
  });
});
