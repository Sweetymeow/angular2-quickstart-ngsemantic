import { Injectable } from '@angular/core';
import { Location } from '../core/location.class';
import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';

@Injectable()
export class MapService {
  map: Map;
  baseMaps: any;

  constructor() {
    (mapboxgl as any).accessToken = 'pk.eyJ1Ijoic3dlZXR5bWVvdyIsImEiOiJjaXoxdHM4aWowNHI2MnFxZjZtbmw4cDJ4In0.1140mL1gVeMEdPvgmOOG0g';

    this.baseMaps = [
      { name: 'Street', id: 'street' },
      { name: 'Bright', id: 'bright' },
      { name: 'Light', id: 'light' },
      { name: 'Satellite', id: 'satellite' }
    ];
  }
}
