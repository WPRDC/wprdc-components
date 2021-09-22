import { ColorScheme, Geog, GeogIdentifier } from '../../types';
import { Dispatch, Reducer } from 'react';

export interface ProviderAction {
  type: string;
  payload?: unknown;
}

export interface ProviderProps extends ProviderState {
  usingSSR?: boolean;
  reducer?: Reducer<ProviderState, ProviderAction>;
}

export interface ProviderState {
  colorScheme?: ColorScheme;
  mapboxAPIToken?: string;
  geog?: Geog;
}

export interface ProviderContext extends ProviderState {
  dispatch: Dispatch<ProviderAction>;
  setGeog: (geog: Geog) => void;
  fetchAndSetGeog: (geog: GeogIdentifier) => void;
}
