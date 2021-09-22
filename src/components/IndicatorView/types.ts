/**
 *
 * Indicator types
 *
 **/
import { DataVizBase, GeogBrief, Indicator } from '../../types';

export interface IndicatorViewProps {
  indicator?: Indicator;
  geog?: GeogBrief;
  card?: boolean;
  isLoading?: boolean;
  onExploreIndicator?: (indicator: Indicator) => unknown;
  onExploreDataViz?: (dataViz: DataVizBase) => unknown;
}

export interface ConnectedIndicatorViewProps
  extends Omit<IndicatorViewProps, 'indicator'> {
  indicatorSlug?: string;
}
