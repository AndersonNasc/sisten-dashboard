import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPanelsComponent } from './grid-panels.component';

describe('GridPanelsComponent', () => {
  let component: GridPanelsComponent;
  let fixture: ComponentFixture<GridPanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPanelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
