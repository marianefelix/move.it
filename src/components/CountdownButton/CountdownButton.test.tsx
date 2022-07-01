import '@testing-library/jest-dom';
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

  it('should show the start cicle button by default', () => {
    render(<CountdownButton {...props} />);

    expect(screen.getByTestId('countdown-button').textContent).toContain(
      'Iniciar um ciclo'
    );
  });

  it('should show the active button when isActive is true', () => {
    render(<CountdownButton {...props} isActive />);

    expect(screen.getByText(/^Abandonar ciclo/)).toBeInTheDocument();
    expect(screen.getByTitle('Ícone de interromper')).toBeInTheDocument();
  });

  it('should show the disabled button when hasFinished is true', () => {
    render(<CountdownButton {...props} hasFinished />);

    expect(screen.getByTestId('countdown-button')).toBeDisabled();
  });
});
