import { Component, OnInit } from '@angular/core';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

import { MapService } from '../../services/map.service';
import { Location } from '../../core/location.class';
import { LngLat, Map } from 'mapbox-gl';

@Component({
    selector: 'my-home',
    templateUrl: 'app/components/home/home.component.html',
    styleUrls:[
      'app/components/home/home.component.less'
    ]
})
export class HomeComponent implements OnInit {

  constructor(private mapService: MapService){}

  ngOnInit(): void {
    let map = new Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v9',
        center: [-103.59179687498357, 40.66995747013945],
        zoom: 3
    });

    this.mapService.map = map;
  }

}
