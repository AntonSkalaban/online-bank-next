"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

import { mapModules, mapState, placemarks, ymapQurey } from "./constants";
import "./style.scss";

export const YMap = () => {
  const mapRef = useRef<ymaps.Map | null>(null);

  const searchParams = useSearchParams();
  const selectedCategories = searchParams?.get("filter")?.split("%") || [];

  useEffect(() => {
    return () => {
      const map = mapRef.current;
      map?.geoObjects.removeAll();
    };
  }, []);

  return (
    <YMaps query={ymapQurey}>
      <Map
        className="ymap"
        defaultState={mapState}
        modules={mapModules}
        instanceRef={(ref) => (mapRef.current = ref)}
      >
        {selectedCategories.map((cat) => {
          const { coords, props, options } = placemarks[cat];

          return coords.map((coords) => (
            <Placemark
              key={coords.join()}
              geometry={coords}
              properties={props}
              options={options}
            />
          ));
        })}
      </Map>
    </YMaps>
  );
};
