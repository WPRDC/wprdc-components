import { Feature } from 'geojson';
import { PointerEvent } from 'react-map-gl';

export function extractFeatureFromEvent(
  event: PointerEvent,
): Feature | undefined {
  if (event && event.features && event.features.length) {
    return event.features[0];
  }
  return undefined;
}
