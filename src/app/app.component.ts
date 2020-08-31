import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {BaseComponent} from './base.component';
import {LocalStorage} from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  appTitle = 'Console-NZ';

  appDescription = 'Back Office Application for Nestzone';

  currentViewName = 'Home';

  @LocalStorage()
  sessionUser: any;

  sideBarClass = '';

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  onActivate(baseComponent: BaseComponent): void {
    this.currentViewName = baseComponent.viewName;
  }

  toggleClass(): void {
    this.sideBarClass = this.sideBarClass === 'active' ? '' : 'active';
  }

}
