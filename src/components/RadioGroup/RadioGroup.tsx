/**
 *
 * RadioGroup
 *
 * A group of radio buttons
 *
 */
import * as React from 'react';
import '../../styles/global.css';
import styles from './RadioGroup.module.css';

import { RadioGroupProps, RadioProps } from './types';
import { RadioGroupState, useRadioGroupState } from '@react-stately/radio';
import { useRadio, useRadioGroup } from '@react-aria/radio';

const RadioContext = React.createContext<RadioGroupState | null>(null);

export function RadioGroup(props: RadioGroupProps) {
  const { children, label } = props;
  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps } = useRadioGroup(props, state);

  return (
    <div {...radioGroupProps} className={styles.container}>
      <span {...labelProps} className={styles.label}>
        {label}
      </span>
      <RadioContext.Provider value={state}>
        <div className={styles.itemsWrapper}>{children}</div>
      </RadioContext.Provider>
    </div>
  );
}

export function Radio(props: RadioProps) {
  const { children } = props;
  const state = React.useContext(RadioContext) as RadioGroupState;
  const ref = React.useRef<HTMLInputElement>(null);
  const { inputProps } = useRadio(props, state, ref);

  return (
    <label style={{ display: 'block' }} className={styles.itemLabel}>
      <input {...inputProps} ref={ref} className={styles.input} />
      {children}
    </label>
  );
}

export default RadioGroup;
