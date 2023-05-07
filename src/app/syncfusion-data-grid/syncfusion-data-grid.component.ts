import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { data } from './data';
import { GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { GridData } from '../grid-data';
import { EmitType } from '@syncfusion/ej2-base';
  
@Component({
  selector: 'app-syncfusion-data-grid',
  templateUrl: './syncfusion-data-grid.component.html',
  styleUrls: ['./syncfusion-data-grid.component.scss']
})
export class SyncfusionDataGridComponent implements OnInit {
  @ViewChild('ejDialog') ejDialog: DialogComponent | undefined;
  @ViewChild('container', { read: ElementRef, static: true }) container: ElementRef | undefined;
  public targetElement: HTMLElement | undefined;
  public data: Object[] = [];
  public pageSettings: any;
  public popupHeader: any;
  public dialog: any;
  public filterSettings: Object | undefined;
  popupContent: typeof ElementRef | undefined;
  dialogContent: any;

  ngOnInit(): void {
    this.filterSettings = { type: 'Menu' };
    this.data = data;
    this.initilaizeTarget();
  }

  public initilaizeTarget: EmitType<object> = () => {
    this.targetElement = this.container?.nativeElement.parentElement;
    this.ejDialog?.hide();
  }
  public hideDialog: EmitType<object> = () => {
    this.ejDialog?.hide();
  }
  public onOpenDialog = (event: any): void => {
    this.ejDialog?.show();
};
public onRowSelected(args: RowSelectEventArgs) {
  const rowData = args.data;
  // Set the content of the dialog using the dialogContent element
  this.ejDialog?.setProperties({
    content: this.dialogContent?.nativeElement.innerHTML,
  });
  this.ejDialog?.show();
}
}
