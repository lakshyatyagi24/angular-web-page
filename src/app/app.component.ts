import { Component, OnInit } from '@angular/core';
import { SyncfusionLicense } from './syncfusion-licenses';
import { enableRipple } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  ngOnInit() {
    enableRipple(true);
    SyncfusionLicense;
  }
}
