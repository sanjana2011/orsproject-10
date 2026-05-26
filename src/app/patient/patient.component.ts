import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html'
})
export class PatientComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.PATIENT, locator, route);
  }

}