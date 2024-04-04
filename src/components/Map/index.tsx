import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import classes from "./map.module.css";
import { Container } from "@mantine/core";

const Map = () => {
  return (
    <Container className={classes.container}>
      <MapContainer
        className={classes.mapContainer}
        center={[10.325113810462044, 123.95309536499914]}
        zoom={14}
        style={{ height: "300px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={[10.325113810462044, 123.95309536499914]}>
          <Popup>Region Name</Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};

export default Map;
