/**
 *
 * Divider
 *
 * One section, divisible....
 *
 */
import * as React from 'react';
import '../../styles/global.css';
import styles from './Divider.module.css';

import { DividerProps } from './types';
import classNames from 'classnames';

export const Divider: React.FC<DividerProps> = ({
  vertical,
  weight = 'thin',
}) => {
  if (!!vertical) {
    return (
      <div
        className={classNames([styles.vertical, styles[`vertical-${weight}`]])}
      />
    );
  }

  return (
    <hr
      className={classNames([
        styles.horizontal,
        styles[`horizontal-${weight}`],
      ])}
    />
  );
};

export default Divider;
