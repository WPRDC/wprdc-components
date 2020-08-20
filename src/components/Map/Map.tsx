/**
 *
 * Map
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
//
// import InteractiveMap, {
//   StaticMap,
//   Source,
//   Layer,
//   NavigationControl,
//   ViewportProps,
//   ExtraState,
// } from 'react-map-gl';
//
// import { MapProps, ViewportOptions } from 'components/Map/types';
// import PopUp from './PopUp';
// import Legend from './Legend';
//
// const Map: React.FC<MapProps> = ({
//   defaultViewport,
//   sources,
//   layers,
//   isStatic,
//   children,
//   basemapStyle,
// }) => {
//   // Initialization
//   const ReactMapGL = isStatic ? StaticMap : InteractiveMap;
//   const startingViewport = { ...DEFAULT_VIEWPORT, ...defaultViewport };
//
//   // Internal state
//   const [viewport, setViewport] = useState<ViewportOptions>(startingViewport);
//
//   // Theming
//   const mapStyle = BasemapStyle[basemapStyle];
//
//   // function handleHover(event) {
//   //   const feature = extractFeatureFromEvent(event);
//   //   if (feature && feature.properties.id !== popupFeature) {
//   //     setPopupFeature(feature.properties.id);
//   //     const [lng, lat] = event.lngLat;
//   //     setPopup(
//   //       <PopUp
//   //         name={feature.properties.name}
//   //         slug={feature.properties.category}
//   //         type={feature.properties.asset_type_title}
//   //         lat={lat}
//   //         lng={lng}
//   //         onClose={closePopup}
//   //       />,
//   //     );
//   //   }
//   //   if (!feature) {
//   //     setPopup(undefined);
//   //     setPopupFeature(undefined);
//   //   }
//   // }
//
//   // function handleClick(event) {
//   //   const feature = extractFeatureFromEvent(event);
//   //   if (feature) {
//   //     onAssetClick(feature.properties.id);
//   //   }
//   // }
//
//   return <div />;
//   // <ReactMapGL
//   //   mapboxApiAccessToken={MAPBOX_API_TOKEN}
//   //   {...viewport}
//   //   mapStyle={mapStyle}
//   //   // onHover={handleHover}
//   //   // onClick={handleClick}
//   //   interactiveLayerIds={['asset-points']}
//   // >
//   //   {sources.map(source => (
//   //     <Source {...source} />
//   //   ))}
//   //
//   //   {layers.map(layer => (
//   //     <Layer {...layer} />
//   //   ))}
//   //
//   //   {children}
//   //   <ControlDiv>
//   //     <NavigationControl />
//   //   </ControlDiv>
//   // </ReactMapGL>
// };
//
// Map.propTypes = {
//   defaultViewport: PropTypes.shape({
//     width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     latitude: PropTypes.number,
//     longitude: PropTypes.number,
//     zoom: PropTypes.number,
//     pitch: PropTypes.number,
//   }),
//   sources: PropTypes.arrayOf(PropTypes.object),
//   layers: PropTypes.arrayOf(PropTypes.object),
//   isStatic: PropTypes.bool,
//   colorScheme: PropTypes.string,
//   children: PropTypes.node,
//   onAssetClick: PropTypes.func,
//   categories: PropTypes.arrayOf(PropTypes.shape(categorySchema)),
//   filter: PropTypes.array,
//   searchTerm: PropTypes.string,
// };
//
// Map.defaultProps = {
//   sources: [],
//   layers: [],
// };
//
// const ControlDiv = styled.div`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
// `;
//
// export default Map;
const Map = ({ label = 'woot' }) => <div>{label}</div>;
export default Map;
