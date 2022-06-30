import { screen } from '../../utils/test-utils';
import { CountdownButton } from '.';
import { render } from '@testing-library/react';

describe('<CountdownButton />', () => {
  const props = {
    hasFinished: false,
    isActive: false,
    resetCountdown: function () {},
    startCountdown: function () {},
  };

  it('should show the start cicle button', () => {
    render(<CountdownButton {...props} />);

    expect(screen.getByTestId('countdown-button').textContent).toContain(
      'Iniciar um ciclo'
    );
  });

  it('should show the active button', () => {
    render(<CountdownButton {...props} />);
  });
});
