import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCParameterizationComponent } from './new-c-parameterization.component';

describe('NewCParameterizationComponent', () => {
  let component: NewCParameterizationComponent;
  let fixture: ComponentFixture<NewCParameterizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCParameterizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCParameterizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
