import { Feature } from 'geojson';
import { PointerEvent, SourceProps } from 'react-map-gl';
import { MAPS_API_ENDPOINT } from './settings';

export function extractFeatureFromEvent(
  event: PointerEvent,
): Feature | undefined {
  if (event && event.features && event.features.length) {
    return event.features[0];
  }
  return undefined;
}

export function hasFeatures(event: PointerEvent): boolean {
  return !!extractFeatureFromEvent(event);
}

export function cartoInstantiationParams(id: string, sql: string) {
  return {
    layers: [
      {
        id,
        options: {
          sql,
        },
      },
    ],
  };
}

type cartoResponse = {
  metadata: { tilejson: { vector: { tiles: string[] } } };
};

export function extractCartoTileUrls(data: cartoResponse): string[] {
  return data.metadata.tilejson.vector.tiles;
}

export function fetchCartoVectorSource(
  id: string,
  sql: string,
  type = 'vector',
  minzoom = 0,
  maxzoom = 22,
): PromiseLike<SourceProps> {
  const config = encodeURIComponent(
    JSON.stringify(cartoInstantiationParams(id, sql)),
  );
  return new Promise((resolve, reject) => {
    fetch(`${MAPS_API_ENDPOINT}?config=${config}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(
        response => response.json(),
        error => reject(error),
      )
      .then(
        data => {
          resolve({
            id,
            type,
            tiles: extractCartoTileUrls(data),
            minzoom,
            maxzoom,
          });
        },
        error => reject(error),
      );
  });
}
