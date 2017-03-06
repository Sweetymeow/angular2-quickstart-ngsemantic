import { Component } from '@angular/core';

import 'jquery';
import 'semantic';

import { MapService } from '../services/map.service';
import {Location} from '../core/location.class';
import {LngLat, Map} from 'mapbox-gl';

@Component({
    selector: 'my-app',
    templateUrl: `app/components/app.component.html`
})
export class AppComponent {
    visible: boolean = false;

    setVisibility(data: boolean) { this.visible = data; }
}
