import { Component, OnInit } from '@angular/core';
import {ApiService} from '../@shared/api.service';
import {ToastrService} from 'ngx-toastr';
import {BaseComponent} from '../@shared/base.component';
import {Contact} from '../@model/dto';

@Component({
  selector: 'app-contacts',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BaseComponent implements OnInit {

  item: Contact;

  items: Array<Contact>;

  constructor(private appService: ApiService,
              private toastr: ToastrService) {
    super();
    super.viewName = 'Contacts';
    this.item = new Contact();
  }

  ngOnInit(): void {
    this.appService.fetchContacts().subscribe((data: any) => {
      // console.log(data);
      this.items = new Array<Contact>();
      data.forEach(i => {
        const c = new Contact();
        Object.assign(c, i);
        c.time = i.contact_time;
        this.items.push(c);
      });
      if (this.items.length > 0) {
        this.item = this.items[0];
      }
    });
  }

  view(item: Contact): void {
    this.item = item;
  }

}
