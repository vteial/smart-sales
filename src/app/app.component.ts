import { Component } from '@angular/core';
import {BaseComponent} from './base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'Home';

  onActivate(baseComponent: BaseComponent): void{
    this.name = baseComponent.viewName;
  }
}
