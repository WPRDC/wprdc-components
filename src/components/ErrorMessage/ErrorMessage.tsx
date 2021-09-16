/**
 *
 * ErrorMessage
 *
 * [ Shows errors ]
 *
 */
import * as React from 'react';
import { ErrorMessageProps } from './types';

import '../../styles/global.css';

import styles from './ErrorMessage.module.css';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title = 'Uncaught Error',
  message = 'Please contact the helpdesk.',
  variant,
}) => {
  if (variant === 'centered')
    return (
      <div className={styles.centeredContainer}>
        <p className={styles.centeredTitle}>{title}</p>
        <p className={styles.centeredMessage}>{message}</p>
      </div>
    );
  return (
    <span className={styles.inlineContainer}>
      <span className={styles.inlineTitle}>{title} </span>
      <span className={styles.inlineMessage}>{message}</span>
    </span>
  );
};

ErrorMessage.propTypes = {};

export default ErrorMessage;
