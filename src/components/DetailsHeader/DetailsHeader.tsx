/**
 *
 * DetailsHeader
 *
 * Standardized style for header of detail displays
 *
 */
import * as React from 'react';
import '../../styles/global.css';

import { DetailsHeaderProps } from './types';
import { Heading } from '../Heading';

export const DetailsHeader: React.FC<DetailsHeaderProps> = ({
  headingLevel = 3,
  item,
}) => {
  const { name, description } = item;

  // if an indicator,

  return (
    <div className="">
      <div>
        <Heading level={headingLevel} className="text-4xl font-bold">
          {name}
        </Heading>
        <p className="text-lg my-1 pt-0.5 pb-1 border-b">{description}</p>
      </div>
    </div>
  );
};

export default DetailsHeader;
