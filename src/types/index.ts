export * from './profiles';

export type APICallback<D, E = any> = (data?: D, error?: E) => any;

export type SizeCategory = 'S' | 'M' | 'L';

export type Datum = number | string | React.ReactNode;

export interface Size {
  width: number | undefined;
  height: number | undefined;
}
