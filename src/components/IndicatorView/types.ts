/**
 *
 * Indicator types
 *
 **/
import { DataVizBase, GeogIdentifier, Indicator } from '../../types';

export interface IndicatorViewProps {
  indicator?: Indicator;
  geogIdentifier?: GeogIdentifier;
  card?: boolean;
  isLoading?: boolean;
  onExploreIndicator?: (indicator: Indicator) => unknown;
  onExploreDataViz?: (dataViz: DataVizBase) => unknown;
}

export interface ConnectedIndicatorViewProps
  extends Omit<IndicatorViewProps, 'indicator'> {
  indicatorSlug?: string;
}
