import { Component } from '@angular/core';

@Component({
  selector: 'app-online-indicator',
  templateUrl: './online-indicator.component.html',
  styleUrls: ['./online-indicator.component.scss']
})
export class OnlineIndicatorComponent {
  public onlineStatus: Boolean = navigator.onLine;

  constructor() {
    window.addEventListener('online', () => { this.onlineStatus = true; });
    window.addEventListener('offline', () => { this.onlineStatus = false; });
  }
}
