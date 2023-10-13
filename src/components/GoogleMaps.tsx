'use client'

import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api'
import { useMemo } from 'react'
import { Spinner } from '@nextui-org/spinner'

export default function GoogleMaps() {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.GOOGLE_API_KEY! })

  const center = useMemo(() => ({ lat: 50.19072132093003, lng: 8.992837554390183 }), [])

  return (
    <>
      {isLoaded ? (
        <GoogleMap mapContainerClassName="h-[400px]" center={center} zoom={12}>
          <Marker position={center}>
            {/* <InfoWindow position={center} options={{ pixelOffset: { height: -100, equals: () => true, width: 0 } }}>
              <p>Service-Point-Neuberg</p>
            </InfoWindow> */}
          </Marker>
        </GoogleMap>
      ) : (
        <Spinner />
      )}
    </>
  )
}
