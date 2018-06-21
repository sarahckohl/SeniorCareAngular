import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointSchedulerComponent } from './appoint-scheduler.component';

describe('AppointSchedulerComponent', () => {
  let component: AppointSchedulerComponent;
  let fixture: ComponentFixture<AppointSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
