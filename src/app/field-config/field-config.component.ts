import {Component, OnInit, TemplateRef} from '@angular/core';
import {BaseComponent} from '../@shared/base.component';
import {ApiService} from '../@shared/api.service';
import {ToastrService} from 'ngx-toastr';
import {FieldConfig} from '../@model/field.config';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ClipboardService} from 'ngx-clipboard';

@Component({
  selector: 'app-field-config',
  templateUrl: './field-config.component.html',
  styleUrls: ['./field-config.component.css']
})
export class FieldConfigComponent extends BaseComponent implements OnInit {

  modalRef: BsModalRef;

  model = new FieldConfig();

  constructor(
    private appService: ApiService,
    private toastr: ToastrService,
    private modalService: BsModalService,
    private clipboardService: ClipboardService) {
    super();
    super.viewName = 'Field Config';
  }

  ngOnInit(): void {
    this.resetForm();
    this.resetModel();
  }

  resetForm(): void {
    this.model = new FieldConfig();
    this.model.userType = 'o';
    this.model.propState = 'r';
    this.model.propCategory = '-';
    this.model.propType = '-';
    this.resetModel();
  }

  fetchAndUpdate(): void {
    if (this.model.propCategory === '-' || this.model.propType === '-') {
      return;
    }
    this.appService.fetchFieldConfig(this.model.asKey()).subscribe((data: any) => {
      this.model.propKey = this.model.asKey();
      this.model.copyFrom(data);
    });
  }

  resetModel(): void {
    this.model.propKey = this.model.asKey();
    this.model.section = this.model.sections[0];
    this.model.sectionName = this.model.section.name;
  }

  saveModel(): void {
    this.toastr.clear();
    console.log('Property Category : ' + this.model.propCategory);
    if (this.model.propCategory === '-') {
      this.toastr.error('Please select property category!', 'Error!');
      return;
    }
    console.log('Property Type : ' + this.model.propType);
    if (this.model.propType === '-') {
      this.toastr.error('Please select property type!', 'Error!');
      return;
    }
    console.log(this.model.section);
    this.appService.saveFieldConfig(this.model.asKey(), [this.model.section]).subscribe((data: any) => {
      console.log(data);
      this.toastr.info('Successfully saved!', 'Ok!');
    });
  }

  copyPayLoadToClipboard(): void {
    this.clipboardService.copy(JSON.stringify(this.model.sections));
    this.toastr.info('Copied to clipboard!', 'Ok!');
  }

  showPayLoad(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
  }

  onSectionName(): void {
    this.model.section = this.model.sections.find((o) => {
      return o.name === this.model.sectionName;
    });
  }

}
