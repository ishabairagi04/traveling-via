import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import * as L from 'leaflet';
import { Typography, Box, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const customIcon = new L.DivIcon({
  html: '<div style="width:20px;height:20px;border-radius:50%;background:#c78c32;border:4px solid white;box-shadow:0 0 6px rgba(0,0,0,0.4);"></div>',
  className: ''
});

// 🔧 Inject raw HTML content into the Leaflet popup (works 100%)
function OpenPopupOnLoad({ position, imageUrl, subtitle, location }) {
  const map = useMap();

  useEffect(() => {
    const popup = L.popup({ autoClose: false, closeOnClick: false })
      .setLatLng(position)
      .setContent(`
        <div style="display:flex;gap:10px;max-width:250px;">
          <img src="${imageUrl}" alt="${location}" style="width:100px;height:60px;border-radius:8px;object-fit:cover;" />
          <div>
            <div style="font-size:12px;color:gray;margin-bottom:4px;">${location}</div>
            <div style="font-weight:bold;font-size:14px;line-height:1.3;">${subtitle}</div>
          </div>
        </div>
      `);
    popup.openOn(map);
  }, [map, position, imageUrl, subtitle, location]);

  return null;
}

export default function TourMap({
  title = 'Tour Map',
  subtitle = [],
  location = [],
  coordinates = [],
  imageUrl = '',
  zoom = 8
}) {
  return (
    <Box mt={6}>
      {/* Section Heading */}
      <Typography variant="h5" fontWeight="bold" mb={0.5}>
        {title}
      </Typography>
      <Typography variant="h6" fontWeight={500}>
        {subtitle}
      </Typography>

      {/* Location Line */}
      <Stack direction="row" alignItems="center" spacing={1} mb={2}>
        <LocationOnIcon fontSize="small" sx={{ color: 'gray' }} />
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
      </Stack>

      {/* Map Display */}
     <Box sx={{ borderRadius: 2, overflow: 'visible', height: 500 }}>

       <MapContainer
  center={coordinates}
  zoom={zoom}
  scrollWheelZoom={true}
  dragging={true}
  doubleClickZoom={true}
  zoomControl={true}
  style={{
    height: '100%',
    width: '100%',
    zIndex: 0,
    touchAction: 'auto',
    pointerEvents: 'auto'
  }}
>

          <TileLayer
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team'
          />
          <Marker position={coordinates} icon={customIcon} />
          <OpenPopupOnLoad
            position={coordinates}
            imageUrl={imageUrl}
            subtitle={subtitle}
            location={location}
          />
        </MapContainer>
      </Box>
    </Box>
  );
}
