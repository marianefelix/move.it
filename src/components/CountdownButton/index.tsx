import { ReactComponent as PlayIcon } from 'assets/icons/play_arrow.svg';
import { ReactComponent as StopIcon } from 'assets/icons/stop.svg';
import { ReactComponent as CheckIcon } from 'assets/icons/check_circle.svg';

import {
  DisabledCountdownButton,
  StartCountdownButton,
  StopCountdownButton,
} from './styles';

interface CountdownButtonProps {
  isActive: boolean;
  hasFinished: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

export const CountdownButton = (props: CountdownButtonProps) => {
  return props.hasFinished ? (
    <DisabledCountdownButton
      type="button"
      disabled
      data-testid="countdown-button"
    >
      Ciclo encerrado
      <CheckIcon title="Ícone de finalizado" />
    </DisabledCountdownButton>
  ) : props.isActive ? (
    <StopCountdownButton
      type="button"
      onClick={props.resetCountdown}
      data-testid="countdown-button"
    >
      Abandonar ciclo
      <StopIcon data-testid="close-icon" title="Ícone de interromper" />
    </StopCountdownButton>
  ) : (
    <StartCountdownButton
      type="button"
      onClick={props.startCountdown}
      data-testid="countdown-button"
    >
      Iniciar um ciclo
      <PlayIcon title="Ícone de iniciar" />
    </StartCountdownButton>
  );
};
