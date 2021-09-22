import { ColorScheme } from '../types';

export * from './formatters';
export * from './hooks';

export const userPrefersDark =
  !(typeof window === 'undefined') &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

export const DEFAULT_COLOR_SCHEME = userPrefersDark
  ? ColorScheme.Dark
  : ColorScheme.Light;

export function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
