
import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-get-marksheet',
  templateUrl: './get-marksheet.component.html'
})
export class GetMarksheetComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.MARKSHEET, locator, route);
  }

  // Validate roll number input
  validate(): boolean {
    return this.form.data.rollNo && this.form.data.rollNo.trim() !== '';
  }

  // Search marksheet by roll number
  go() {
    if (!this.validate()) {
      return;
    }

    var _self = this;
    const url = this.api.endpoint + "/rollno/" + this.form.data.rollNo;
    
    this.locator.httpService.get(url, function (res: any) {
      if (res.success) {
        _self.form.error = false;
        _self.form.message = res.result.message || "Marksheet found successfully";
        _self.form.list = res.result.data;
        _self.form.inputerror = {};
      } else {
        _self.form.error = true;
        _self.form.message = res.result.message || "Marksheet not found for this roll number";
        _self.form.list = {};
      }
    }, function (error: any) {
      _self.form.error = true;
      _self.form.message = "Error fetching marksheet. Please try again.";
      _self.form.list = {};
    });
  }

  // Get grade for individual subject
  getGrade(marks: number): string {
    if (marks >= 90) return "A++";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B++";
    if (marks >= 60) return "B";
    if (marks >= 50) return "C++";
    if (marks >= 40) return "C";
    if (marks >= 35) return "D";
    return "F";
  }

  // Get overall grade based on percentage
  getOverallGrade(): string {
    if (!this.form.list || !this.form.list.physics) return "F";
    
    const total = this.form.list.maths + this.form.list.physics + this.form.list.chemistry;
    const percentage = (total * 100) / 300;
    
    if (percentage >= 90) return "A++";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B++";
    if (percentage >= 60) return "B";
    if (percentage >= 50) return "C++";
    if (percentage >= 40) return "C";
    if (percentage >= 35) return "D";
    return "F";
  }

}
