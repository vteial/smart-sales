import {Component, OnInit, TemplateRef} from '@angular/core';
import {BaseComponent} from '../@shared/base.component';
import {ApiService} from '../@shared/api.service';
import {ToastrService} from 'ngx-toastr';
import {FieldConfig} from '../@model/field.config';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ClipboardService} from 'ngx-clipboard';
import {PrettyCheckBoxChange} from 'ngx-pretty-checkbox';

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
    this.model.propKeySelected = '-';
    this.resetModel();
  }

  fetchAndUpdate(): void {
    this.toastr.clear();
    // console.log('Property Category : ' + this.model.propCategory);
    if (this.model.propCategory === '-') {
      this.toastr.error('Please select property category!');
      return;
    }
    // console.log('Property Type : ' + this.model.propType);
    if (this.model.propType === '-') {
      this.toastr.error('Please select property type!');
      return;
    }
    this.appService.fetchExistingFieldConfig(this.model.asKey()).subscribe((data: any) => {
      this.model.propKey = this.model.asKey();
      this.resetModel();
      if (data.length > 0) {
        this.model.copyFrom(data);
        this.toastr.info('Successfully loaded existing configuration.');
      } else {
        this.toastr.warning('There is no existing configuration.');
      }
    });
  }

  resetModel(): void {
    this.model.propKey = this.model.asKey();
    this.model.section = this.model.sections[0];
    this.model.sectionName = this.model.section.name;
  }

  saveModel(): void {
    this.toastr.clear();
    // console.log('Property Category : ' + this.model.propCategory);
    if (this.model.propCategory === '-') {
      this.toastr.error('Please select property category!');
      return;
    }
    // console.log('Property Type : ' + this.model.propType);
    if (this.model.propType === '-') {
      this.toastr.error('Please select property type!');
      return;
    }
    // console.log(this.model.section);
    this.appService.saveFieldConfig(this.model.asKey(), [this.model.section]).subscribe((data: any) => {
      console.log(data);
      this.toastr.success('Successfully saved!');
    });
  }

  saveAll(): void {
    this.toastr.clear();
    // console.log('Property Category : ' + this.model.propCategory);
    if (this.model.propCategory === '-') {
      this.toastr.error('Please select property category!');
      return;
    }
    // console.log('Property Type : ' + this.model.propType);
    if (this.model.propType === '-') {
      this.toastr.error('Please select property type!');
      return;
    }
    // console.log(this.model.sections);
    this.appService.saveFieldConfig(this.model.asKey(), this.model.sections).subscribe((data: any) => {
      console.log(data);
      this.toastr.success('Successfully saved!');
    });
  }

  import(): void {
    console.log(this.model.propKeySelected);
    if (this.model.propKeySelected === '-') {
      this.toastr.error('Please select field config key!');
      return;
    }
    this.appService.fetchStaticFieldConfig(this.model.propKeySelected).subscribe((data: any) => {
      // this.resetModel();
      if (data.length > 0) {
        this.model.copyFrom(data);
        this.toastr.warning('Successfully imported. Don"t forget to save the imported configuration.');
      } else {
        this.toastr.warning('There is no existing configuration.');
      }
    });
  }

  export(): void {
    this.exportToClipboard();
  }

  exportToClipboard(): void {
    this.clipboardService.copy(JSON.stringify(this.model.sections));
    this.toastr.info('Copied to clipboard!');
  }

  showPayLoad(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
  }

  onUserType(event: PrettyCheckBoxChange): void {
    this.model.userType = event.value;
  }

  onPropState(event: PrettyCheckBoxChange): void {
    this.model.propState = event.value;
  }

  onSectionName(): void {
    this.model.section = this.model.sections.find((o) => {
      return o.name === this.model.sectionName;
    });
  }
}
