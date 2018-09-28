import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverViewComponent } from './rover-view.component';

describe('RoverViewComponent', () => {
  let component: RoverViewComponent;
  let fixture: ComponentFixture<RoverViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
