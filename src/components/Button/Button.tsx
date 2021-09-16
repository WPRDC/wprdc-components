/**
 *
 * Button
 *
 * Press it
 *
 */
import * as React from 'react';
import { useRef } from 'react';
import '../../styles/global.css';
import styles from './Button.module.css';

import { ButtonProps } from './types';
import { useButton } from '@react-aria/button';
import classNames from 'classnames';

export const Button: React.FC<ButtonProps> = (props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const { children, color = 'default' } = props;

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={
        color === 'none'
          ? ''
          : classNames([
              styles.container,
              styles[color],
              { [styles.elevated]: props.elevated },
            ])
      }
    >
      {children}
    </button>
  );
};

export default Button;
