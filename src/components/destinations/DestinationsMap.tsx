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

type DestinationsMapProps = {
    latitude?: number
    longitude?: number
    title?: string
    description?: string
    zoom?: number
}

function FitAllDestinations() {
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

function FocusDestination({
                              latitude,
                              longitude,
                              zoom,
                          }: {
    latitude: number
    longitude: number
    zoom: number
}) {
    const map = useMap()

    useEffect(() => {
        map.setView([latitude, longitude], zoom, {
            animate: true,
        })
    }, [map, latitude, longitude, zoom])

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

export function DestinationsMap({
                                    latitude,
                                    longitude,
                                    title,
                                    description,
                                    zoom = 12,
                                }: DestinationsMapProps) {
    const isSingleDestination =
        latitude !== undefined && longitude !== undefined

    return (
        <div className="relative h-[400px] overflow-hidden rounded-card shadow-soft sm:h-[500px]">
            <MapContainer
                center={
                    isSingleDestination
                        ? [latitude, longitude]
                        : [20, 10]
                }
                zoom={isSingleDestination ? zoom : 2}
                scrollWheelZoom={false}
                className="h-full w-full"
            >
                {/* Satellite terrain */}
                <TileLayer
                    attribution="Tiles &copy; Esri"
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    maxZoom={19}
                />

                {/* Country borders and place names */}
                <TileLayer
                    attribution="Labels &copy; Esri"
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
                    maxZoom={19}
                />

                {isSingleDestination ? (
                    <FocusDestination
                        latitude={latitude}
                        longitude={longitude}
                        zoom={zoom}
                    />
                ) : (
                    <FitAllDestinations />
                )}

                {isSingleDestination ? (
                    <Marker
                        position={[latitude, longitude]}
                        icon={destinationIcon}
                    >
                        <Popup>
                            <div className="min-w-[210px] p-1">
                                <span className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-rust">
                                    Calliste Travel
                                </span>

                                <h3 className="mt-2 font-display text-xl text-ink">
                                    {title}
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                                    {description}
                                </p>
                            </div>
                        </Popup>
                    </Marker>
                ) : (
                    featuredDestinations.map((destination) => (
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
                    ))
                )}
            </MapContainer>
        </div>
    )
}