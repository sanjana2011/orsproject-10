import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent  extends BaseListCtl  {

   constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
      super(locator.endpoints.CONTACT, locator, route);
    }
}
