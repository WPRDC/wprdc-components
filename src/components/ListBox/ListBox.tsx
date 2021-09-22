import * as React from 'react';
import { ListBoxProps } from './types';
import { useTreeState } from '@react-stately/tree';
import { StatelessListBox } from './StatelessListBox';

export function ListBox<T extends object>(props: ListBoxProps<T>): JSX.Element {
  const state = useTreeState<T>(props);
  let listBoxRef = React.useRef<HTMLUListElement>(null);

  return <StatelessListBox listBoxRef={listBoxRef} {...props} state={state} />;
}

export default ListBox;
