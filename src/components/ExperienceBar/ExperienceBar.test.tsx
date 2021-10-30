import { initialProviderState, render, screen } from '../../utils/test-utils';
import ExperienceBar from '.';

describe('<ExperienceBar />', () => {
  const providerProps = {
    value: {
      ...initialProviderState,
      currentExperience: 0,
      experienceToNextLevel: 64,
    },
  };

  it('should show the current experience from provider', () => {
    render(<ExperienceBar />, { providerProps });

    const element = screen.getByTestId('current-experience');
    expect(element.textContent).toBe('0xp');
  });

  it('should show the experience to next level from provider', () => {
    render(<ExperienceBar />, { providerProps });

    const element = screen.getByTestId('to-next-level');
    expect(element.textContent).toBe('64xp');
  });
});
