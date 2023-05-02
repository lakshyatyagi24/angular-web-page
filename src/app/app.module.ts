import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SyncfusionDataGridComponent } from './syncfusion-data-grid/syncfusion-data-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    SyncfusionDataGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
