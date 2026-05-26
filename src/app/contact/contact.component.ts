import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BaseCtl {
constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.CONTACT, locator, route);
  }

}
