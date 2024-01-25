// mapUtils.js
export function initializeMap() {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get('coordinates');

    return new mapboxgl.Map({
      container: 'map',
      style: mapStyle,
      zoom: 8,
      center: JSON.parse(value)
    });
  }
  
  export function createRiverGeoData(data) {
    return data.riverDataJson.systems.map((rivers) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [rivers.longitude, rivers.latitude]
      },
      properties: rivers
    }));
  }
  
  export function createOceanGeoData(data) {
    return data.oceanDataJson.systems.map((ocean) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [ocean.longitude, ocean.latitude]
      },
      properties: ocean
    }));
  }
  
  export function addMapLoadEvent(map, oceanGeoData, riverGeoData) {
    map.on('load', () => {
      map.addSource('coordination-points', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: oceanGeoData.concat(riverGeoData)
        }
      });
  
      map.addLayer({
        id: 'systems-points',
        type: 'circle',
        source: 'coordination-points',
        paint: {
          'circle-radius': 10,
          'circle-color': [
            'match',
            ['get', 'status'],
            'in_operation',
            '#84CE5F',
            'in_maintenance',
            '#143653',
            'installed_for_testing',
            '#6CCDE1',
            'contract_signed',
            '#B0B0B0',
            'planned',
            '#B0B0B0',
            '#B0B0B0' // Default color
          ]
        }
      });
    });
  }
  
  export function addClickEvent(map, callback) {
    map.on('load', () => {
      map.on('click', 'systems-points', (e) => {
        const coordinates = e.features[0].geometry.coordinates;
        const properties = e.features[0].properties;
        callback(properties, coordinates);
      });
    });
  }
  
  export function addMouseEnterEvent(map) {
    map.on('mouseenter', 'systems-points', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
  }
  
  export function addMouseLeaveEvent(map) {
    map.on('mouseleave', 'systems-points', () => {
      map.getCanvas().style.cursor = '';
    });
  }

