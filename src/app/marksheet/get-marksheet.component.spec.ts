import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMarksheetComponent } from './get-marksheet.component';

describe('GetMarksheetComponent', () => {
  let component: GetMarksheetComponent;
  let fixture: ComponentFixture<GetMarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
