import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SyncfusionDataGridComponent } from './syncfusion-data-grid/syncfusion-data-grid.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SyncfusionDataGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    DialogModule,
    FormsModule
  ],
  providers: [PageService, SortService, FilterService, GroupService],
  bootstrap: [AppComponent]
})

export class AppModule {}
