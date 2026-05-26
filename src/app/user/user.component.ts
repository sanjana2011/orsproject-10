
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

// Tell TypeScript that jQuery ($) exists globally
declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.USER, locator, route);
  }
  ngAfterViewInit(): void {
    this.initDobPicker();
  }

  initDobPicker(): void {
    // Max allowed DOB = exactly 18 years before today
    const today   = new Date();
    const maxYear = today.getFullYear() - 18;
    const maxDate = new Date(maxYear, today.getMonth(), today.getDate());

    $('#dob').datepicker({
      changeMonth : true,
      changeYear  : true,
      dateFormat  : 'dd/mm/yy',
      yearRange   : `1940:${maxYear}`,   // e.g. "1940:2006"
      maxDate     : maxDate,             // no date after 18 years ago
      minDate     : new Date(1940, 0, 1),

      beforeShowDay: (d: Date) => {
        // Grey out any day newer than maxDate
        if (d > maxDate) {
          return [false, '', 'Must be 18 or older'];
        }
        return [true, '', ''];
      },

      onSelect: (dateStr: string) => {
        // dateStr is "dd/mm/yy" → convert to JS Date → store in form.data.dob
        const parts  = dateStr.split('/');         // [dd, mm, yy]
        const chosen = new Date(+parts[2], +parts[1] - 1, +parts[0]);
        this.form.data.dob = chosen;               // bind to your model
      }
    });
  }
}
