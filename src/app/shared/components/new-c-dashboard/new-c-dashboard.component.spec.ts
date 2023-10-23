import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCDashboardComponent } from './new-c-dashboard.component';

describe('NewCDashboardComponent', () => {
  let component: NewCDashboardComponent;
  let fixture: ComponentFixture<NewCDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
