import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BaseComponent} from '../@shared/base.component';
import {ApiService} from '../@shared/api.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent extends BaseComponent implements OnInit {

  items = [];

  constructor(private appService: ApiService,
              private toastr: ToastrService,
              private modalService: BsModalService) {
    super();
    super.viewName = 'Testimonial';
  }

  ngOnInit(): void {
    this.appService.fetchTestimonials().subscribe((data: any) => {
      console.log(data);
      this.items = data;
    });
  }

}
