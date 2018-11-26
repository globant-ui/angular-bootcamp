import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoversDayComponent } from './rovers-day.component';

describe('RoversDayComponent', () => {
  let component: RoversDayComponent;
  let fixture: ComponentFixture<RoversDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoversDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoversDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
