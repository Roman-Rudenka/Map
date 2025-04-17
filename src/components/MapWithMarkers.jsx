import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from '../styles/App.module.scss';

const MapWithMarkers = () => {
    const [markers, setMarkers] = useState([]);
    const [newMarkerName, setNewMarkerName] = useState('');
    const [selectedCoords, setSelectedCoords] = useState(null);

    const handleMapClick = (event) => {
        const { lat, lng } = event.latlng;
        setSelectedCoords([lat, lng]);
    };

    const handleAddMarker = () => {
        if (selectedCoords && newMarkerName.trim()) {
            const newMarker = {
                id: markers.length + 1,
                name: newMarkerName,
                position: selectedCoords,
            };
            setMarkers([...markers, newMarker]);
            setSelectedCoords(null);
            setNewMarkerName('');
        }
    };

    const handleDeleteMarker = (id) => {
        const filteredMarkers = markers.filter(marker => marker.id !== id);
        setMarkers(filteredMarkers);
    };

    const CustomMapClickHandler = () => {
        useMapEvents({
            click: handleMapClick,
        });
        return null;
    };

    return (
        <div className={styles.container}>
            <div className={styles.mapWrapper}>
                <MapContainer
                    center={[51.505, -0.09]}
                    zoom={13}
                    className={styles.map}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <CustomMapClickHandler />
                    {markers.map((marker) => (
                        <Marker key={marker.id} position={marker.position}>
                            <Popup>
                                <div>
                                    <span>{marker.name}</span>
                                    <br />
                                    <button onClick={() => handleDeleteMarker(marker.id)}>Удалить</button>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>

                {selectedCoords && (
                    <div className={styles.markerForm}>
                        <h3>Добавить метку:</h3>
                        <input
                            type="text"
                            value={newMarkerName}
                            onChange={(e) => setNewMarkerName(e.target.value)}
                            placeholder="Введите название метки"
                            className={styles.input}
                        />
                        <button onClick={handleAddMarker} className={styles.addButton}>
                            Добавить
                        </button>
                    </div>
                )}
            </div>

            <div className={styles.listWrapper}>
                <h2>Список меток:</h2>
                <ul className={styles.markerList}>
                    {markers.map((marker) => (
                        <li key={marker.id} className={styles.markerItem}>
                            <strong>{marker.name}</strong>
                            <br />
                            Широта: {marker.position[0].toFixed(5)}, Долгота: {marker.position[1].toFixed(5)}
                            <br />
                            <button onClick={() => handleDeleteMarker(marker.id)} className={styles.deleteButton}>
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MapWithMarkers;
