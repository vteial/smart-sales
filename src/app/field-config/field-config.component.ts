import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../@shared/base.component';
import {ApiService} from '../@shared/api.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {FieldConfig} from '../@model/field.config';

@Component({
  selector: 'app-field-config',
  templateUrl: './field-config.component.html',
  styleUrls: ['./field-config.component.css']
})
export class FieldConfigComponent extends BaseComponent implements OnInit {

  model = new FieldConfig();

  constructor(private appService: ApiService, private toastr: ToastrService) {
    super();
    super.viewName = 'Field Config';
  }

  ngOnInit(): void {
    this.onReset();
  }

  onSectionName(): void {
    this.model.section = this.model.sections.find((o) => {
      return o.name === this.model.sectionName;
    });
  }

  onSubmit(): void {
    this.toastr.clear();
    console.log('Property Category : ' + this.model.propCategory);
    if (this.model.propCategory === '-') {
      this.toastr.error('Please select property category!', 'Error!');
      return;
    }
    console.log('Property Type : ' + this.model.propType);
    if (this.model.propType === '-') {
      this.toastr.error('Please select property type!', 'Erro!');
      return;
    }
    console.log('AsPayLoad : ', this.model.asPayLoad());
    this.toastr.success('Successfully saved!', 'Ok!');
  }

  onReset(): void {
    this.model = new FieldConfig();
    this.model.userType = 'o';
    this.model.propState = 'r';
    this.model.propCategory = '-';
    this.model.propType = '-';
    this.model.sectionName = 'Location';
    this.model.section = this.model.sections[0];
    // this.toastr.info('Successfully cleared!', 'Ok!');
  }

}
