import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html'
})
export class ClaimComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.CLAIM, locator, route);
  }
}