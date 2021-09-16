import * as React from 'react';
import { Indicator } from '../../types';
import { IndicatorView } from '../IndicatorView';
import { SectionSharedProps } from './types';

interface Props extends SectionSharedProps {
  indicator: Indicator;
}

export default function IndicatorSection({
  indicator,
  onExploreDataViz,
  onExploreIndicator,
}: Props) {
  return (
    <IndicatorView
      card
      indicator={indicator}
      onExploreDataViz={onExploreDataViz}
      onExploreIndicator={onExploreIndicator}
    />
  );
}
