import { Component, OnInit } from '@angular/core';
import {ApiService} from '../@shared/api.service';
import {BaseComponent} from '../@shared/base.component';
import {ToastrService} from 'ngx-toastr';
import {RxFormBuilder} from '@rxweb/reactive-form-validators';
import {Company} from '../@model/dto';
import {FormGroup} from '@angular/forms';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent extends BaseComponent implements OnInit {

  item: Company;

  itemFormGroup: FormGroup;

  constructor(private appService: ApiService,
              private toastr: ToastrService,
              private formBuilder: RxFormBuilder) {
    super();
    super.viewName = 'Settings';
    this.item = new Company();
    if (environment.mode === 'dev') {
      this.item.name = 'Nest Zone';
      this.item.address = '13th Cross, Wilson Garden, Bangalore';
      this.item.phone = '+91 1234567890';
      this.item.fax = '+91 1234567890';
      this.item.email = 'contact@nestzone.in';
    }
  }

  ngOnInit(): void {
    this.itemFormGroup = this.formBuilder.formGroup(this.item);
    this.appService.fetchCompanyInfo().subscribe((data: any) => {
      // console.log(data);
      Object.assign(this.item, data);
    });
  }

  save(): void {
    this.appService.saveCompanyInfo(this.item).subscribe((data: any) => {
      // console.log(data);
      this.toastr.success('Successfully saved...');
    });
  }

}
