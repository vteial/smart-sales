import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {BaseComponent} from '../@shared/base.component';
import {ApiService} from '../@shared/api.service';
import {Testimonial} from '../@model/dto';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RxFormBuilder, RxwebValidators} from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent extends BaseComponent implements OnInit {

  items = [];

  item: Testimonial;

  itemFormGroup: FormGroup;

  constructor(private appService: ApiService,
              private toastr: ToastrService,
              private formBuilder: RxFormBuilder) {
    super();
    super.viewName = 'Testimonial';
    this.init();
  }

  ngOnInit(): void {
    this.appService.fetchTestimonials().subscribe((data: any) => {
      // console.log(data);
      this.copy(data);
      this.edit(this.items[0]);
    });
    this.edit(this.items[0]);
  }

  add(): void {
    this.toastr.info('This feature will come soon...');
  }

  edit(item: Testimonial): void {
    this.item = item;
    this.itemFormGroup = this.formBuilder.formGroup(this.item);
  }

  save(): void {
    this.appService.saveTestimonial('' + this.item.id, this.item).subscribe((data: any) => {
      // console.log(data);
      this.toastr.success('Successfully saved...');
    });
  }

  private copy(data: any): void {
    if (data.length === 3) {
      Object.assign(this.items[0], data[0]);
      Object.assign(this.items[1], data[1]);
      Object.assign(this.items[2], data[2]);
    }
    if (data.length === 1) {
      Object.assign(this.items[0], data[0]);
      Object.assign(this.items[1], data[1]);
    }
    if (data.length === 1) {
      Object.assign(this.items[0], data[0]);
    }
  }

  private init(): void {
    let item = new Testimonial();
    item.id = 1;
    this.items.push(item);
    item = new Testimonial();
    item.id = 2;
    this.items.push(item);
    item = new Testimonial();
    item.id = 3;
    this.items.push(item);
  }

}
