import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../@shared/base.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.css']
})
export class WorkbenchComponent extends BaseComponent implements OnInit, AfterViewInit {

  constructor() {
    super();
    super.viewName = 'Workbench';
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
