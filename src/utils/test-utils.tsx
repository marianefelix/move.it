import { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';

import {
  ChallengesContext,
  ChallengesContextData,
} from '../contexts/ChallengesContext';

const initialProviderState = {} as ChallengesContextData;

interface ProviderPropsType {
  value: ChallengesContextData;
}

interface RenderOptionsType {
  providerProps: ProviderPropsType;
}

const customRender = (
  ui: ReactElement,
  { providerProps, ...renderOptions }: RenderOptionsType
) => {
  return render(
    <ChallengesContext.Provider {...providerProps}>
      {ui}
    </ChallengesContext.Provider>,
    renderOptions
  );
};

export { customRender as render, screen, initialProviderState };
