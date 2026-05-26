import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patientlist.component.html'
})
export class PatientListComponent extends BaseListCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.PATIENT, locator, route);
  }

}