/**
 *
 * Indicator types
 *
 **/
import { DataVizBase, Indicator } from '../../types';

export interface IndicatorViewProps {
  indicator: Indicator;
  card?: boolean;
  onExploreIndicator?: (indicator: Indicator) => unknown;
  onExploreDataViz?: (dataViz: DataVizBase) => unknown;
}
