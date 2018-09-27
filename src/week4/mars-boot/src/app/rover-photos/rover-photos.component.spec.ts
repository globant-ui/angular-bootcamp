import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverPhotosComponent } from './rover-photos.component';

describe('RoverPhotosComponent', () => {
  let component: RoverPhotosComponent;
  let fixture: ComponentFixture<RoverPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
