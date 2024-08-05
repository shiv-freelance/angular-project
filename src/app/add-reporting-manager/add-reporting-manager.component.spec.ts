import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReportingManagerComponent } from './add-reporting-manager.component';

describe('AddReportingManagerComponent', () => {
  let component: AddReportingManagerComponent;
  let fixture: ComponentFixture<AddReportingManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddReportingManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddReportingManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
