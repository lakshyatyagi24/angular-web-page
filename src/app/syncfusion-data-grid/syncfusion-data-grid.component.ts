import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './data';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { GridComponent, FilterService, SortService, PageService } from '@syncfusion/ej2-angular-grids';
import { ToolbarItems, EditSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-syncfusion-data-grid',
  templateUrl: './syncfusion-data-grid.component.html',
  styleUrls: ['./syncfusion-data-grid.component.scss']
})

export class SyncfusionDataGridComponent implements OnInit {
  @ViewChild('grid', { static: false }) public grid: GridComponent | undefined;

  public data: Object[] | undefined;

  public toolbar: ToolbarItems[] = ['Add','Cancel'];
  

  public pageSettings: any;
  ngOnInit(): void {
    this.data = data;
  }

  public valueAccess = (field: string, value: object | any, column: object) => {
    console.log(value[field]);
  }

}
