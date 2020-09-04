/**
 *
 * DataCard
 *
 * [ Card with primary content area for data visualizations. ]
 *
 */

import React from 'react';
import { View, Text, Heading, Content, Flex } from '@adobe/react-spectrum';

import { DataCardProps, DataCardHeaderProps } from './types';
import DataSource from '../DataSource';

export const DataCardHeader = ({
  title,
  titleAdornment,
  variant,
  headingLvl,
}: DataCardHeaderProps) => (
  <Flex>
    <View padding="size-100">
      {titleAdornment}
      <Heading level={headingLvl} marginY="size-0">
        {title}
      </Heading>
    </View>
    <View>{variant === 'multi' && <Text>Tabs | Tabs | Tabs</Text>}</View>
  </Flex>
);

export const DataCard: React.FC<DataCardProps> = ({
  id,
  variant,
  title,
  titleAdornment,
  note,
  description,
  sources,
  children,
  headingLvl = 4,
  viewStyleProps,
  contentViewStyleProps,
  descriptionViewStyleProps,
  noteViewStyleProps,
  sourcesViewStyleProps,
}) => (
  <View id={id} borderWidth="thin" borderRadius="small" {...viewStyleProps}>
    <DataCardHeader
      title={title}
      titleAdornment={titleAdornment}
      headingLvl={headingLvl}
      variant={variant}
    />
    <View padding="size-100">
      <View {...noteViewStyleProps}>
        <Text UNSAFE_style={{ color: 'gray-100' }}>
          <i>{note}</i>
        </Text>
      </View>
      <View
        paddingY="size-100"
        borderYWidth="thin"
        borderYColor="gray-400"
        height="size-2400"
        {...contentViewStyleProps}
      >
        {children}
      </View>
      <View {...descriptionViewStyleProps}>{description}</View>
      {sources && (
        <View {...sourcesViewStyleProps}>
          {sources.map(source => (
            <DataSource {...source} />
          ))}
        </View>
      )}
    </View>
  </View>
);

DataCard.defaultProps = {
  variant: 'single',
  headingLvl: 4,
};

export default DataCard;
