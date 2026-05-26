import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { EndpointServiceService } from './endpoint-service.service';
import { ServiceLocatorService } from './service-locator.service';
import { AuthServiceService } from './auth-service.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpServiceService } from './http-service.service';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './login/forgot-password.component';
import { SignupComponent } from './login/sign-up.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { CollegeComponent } from './college/college.component';
import { CourseComponent } from './course/course.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { UserListComponent } from './user/user-list.component';
import { RoleListComponent } from './role/role-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { StudentListComponent } from './student/student-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { CourseListComponent } from './course/course-list.component';
import { ContactListComponent } from './contact/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PatientComponent } from './patient/patient.component';
import { PatientListComponent } from './patient/patientlist.component';
import { TransportComponent } from './transport/transport.component';
import { TransportListComponent } from './transport/transport-list.component';
import { ClaimComponent } from './claim/claim.component';
import { ClaimListComponent } from './claim/claim-list.component';
import { MeritListComponent } from './marksheet/merit-list.component';
import { GetMarksheetComponent } from './marksheet/get-marksheet.component';
import { ChangepasswordComponent } from './user/changepassword.component';
import { MyprofileComponent } from './user/myprofile.component';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event/event-list.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    ForgotPasswordComponent,
    SignupComponent,
    UserComponent,
    RoleComponent,
    CollegeComponent,
    CourseComponent,
    FacultyComponent,
    StudentComponent,
    SubjectComponent,
    TimetableComponent,
    MarksheetComponent,
    UserListComponent,
    RoleListComponent,
    CollegeListComponent,
    FacultyListComponent,
    MarksheetListComponent,
    StudentListComponent,
    SubjectListComponent,
    TimetableListComponent,
    CourseListComponent,
    ContactListComponent,
    ContactComponent,
    PatientComponent,
    PatientListComponent,
    TransportComponent,
    TransportListComponent,
    ClaimComponent,
    ClaimListComponent,
    MeritListComponent,
    GetMarksheetComponent,
    ChangepasswordComponent,
    MyprofileComponent,
    EventComponent,
    EventListComponent,
   
    
    
  ],
  imports: [
    
    CommonModule, 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
  ],
  providers: [
    HttpServiceService,
    EndpointServiceService,
    ServiceLocatorService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthServiceService, multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
