/**
 *
 * LoadingMessage
 *
 */
import React from 'react';
import { LoadingMessageProps } from './types';

import '../../styles/global.css';
import styles from './LoadingMessage.module.css';
import { Spinner } from '../Spinner';

export const LoadingMessage: React.FC<LoadingMessageProps> = ({ name }) => {
  const displayName = !!name ? ` ${name}` : '';

  return (
    <div className={styles.container}>
      <div>
        <div>
          <Spinner aria-hidden />
        </div>
        <div>
          <p>Loading{displayName}...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingMessage;
