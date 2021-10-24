import { initialProviderState, render, screen } from '../../utils/test-utils';
import Profile from '.';

describe('<Profile />', () => {
  it('should show the user level from provider', () => {
    const providerProps = {
      value: { ...initialProviderState, level: 1 },
    };

    render(<Profile />, { providerProps });

    expect(screen.getByText(/^Level/).textContent).toBe('Level 1');
  });
});
