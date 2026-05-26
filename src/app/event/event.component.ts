import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html'
})
export class EventComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.EVENT, locator, route);
     }
<<<<<<< HEAD
     
=======
>>>>>>> d29b312e156c52aa1f5f5f281e451d8da176b856
} 