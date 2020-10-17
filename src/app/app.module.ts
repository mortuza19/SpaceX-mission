import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchPageContainerComponent } from './launch-page-container/launch-page-container.component';
import { LaunchMissionBodyComponent } from './launch-page-container/launch-mission-body/launch-mission-body.component';
import { LaunchFilterBodyComponent } from './launch-page-container/launch-filter-body/launch-filter-body.component';
import { LaunchMissionItemComponent } from './launch-page-container/launch-mission-body/launch-mission-item/launch-mission-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchPageContainerComponent,
    LaunchMissionBodyComponent,
    LaunchFilterBodyComponent,
    LaunchMissionItemComponent,
    ProgressSpinnerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
