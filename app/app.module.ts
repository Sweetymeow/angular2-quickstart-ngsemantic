import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSemanticModule } from "ng-semantic";

import { AppComponent }  from './components/app.component';
import { routing, APP_ROUTER_PROVIDERS } from "./routes";

import { HomeComponent } from './components/home/home.component';
import { ReviewComponent } from './components/reviews/reviews.component';
import { AddReviewComponent } from "./components/reviews/add/add.component";
import { StatisticReviewComponent } from "./components/reviews/statistic/statistic.component";
import { EventsComponent } from "./components/events/events.component";
import { Auth } from "./services/auth";

import { MapBoxModule }  from 'angular2-mapbox/core';

import { MapService } from './services/map.service';

@NgModule({
    imports: [
        BrowserModule,
        NgSemanticModule,
        routing,
        MapBoxModule.forRoot("pk.eyJ1Ijoic3dlZXR5bWVvdyIsImEiOiJjaXoxdHM4aWowNHI2MnFxZjZtbmw4cDJ4In0.1140mL1gVeMEdPvgmOOG0g")
    ],
    providers: [
        APP_ROUTER_PROVIDERS,
        Auth,
        MapService
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ReviewComponent,
        AddReviewComponent,
        StatisticReviewComponent,
        EventsComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
