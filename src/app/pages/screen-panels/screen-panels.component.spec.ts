import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPanelsComponent } from './screen-panels.component';

describe('ScreenPanelsComponent', () => {
  let component: ScreenPanelsComponent;
  let fixture: ComponentFixture<ScreenPanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenPanelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
