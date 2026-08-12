import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect } from 'react'
import { featuredDestinations } from '../../data/destinations'

function FitDestinations() {
    const map = useMap()

    useEffect(() => {
        const bounds = L.latLngBounds(
            featuredDestinations.map((destination) => [
                destination.latitude,
                destination.longitude,
            ]),
        )

        map.fitBounds(bounds, {
            padding: [60, 60],
            maxZoom: 6,
        })
    }, [map])

    return null
}

const destinationIcon = L.divIcon({
    className: 'calliste-marker',
    html: `
    <div class="calliste-marker-inner">
      <div class="calliste-marker-dot"></div>
    </div>
  `,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18],
})

export function DestinationsMap() {
    return (
        <div className="relative h-[500px] overflow-hidden rounded-card shadow-soft">
            <MapContainer
                center={[36.75, 28.8]}
                zoom={5}
                scrollWheelZoom={false}
                className="h-full w-full"
            >
                {/* Colorful satellite / terrain */}
                <TileLayer
                    attribution="Tiles &copy; Esri"
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    maxZoom={19}
                />

                {/* Text / cities / borders */}
                <TileLayer
                    attribution="Labels &copy; Esri"
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
                    maxZoom={19}
                />

                <FitDestinations />

                {featuredDestinations.map((destination) => (
                    <Marker
                        key={destination.id}
                        position={[
                            destination.latitude,
                            destination.longitude,
                        ]}
                        icon={destinationIcon}
                    >
                        <Popup>
                            <div className="min-w-[210px] p-1">
                <span className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-rust">
                  Calliste Travel
                </span>

                                <h3 className="mt-2 font-display text-xl text-ink">
                                    {destination.title}
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                                    {destination.excerpt}
                                </p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}