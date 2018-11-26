import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoversGalleryComponent } from './rovers-gallery.component';

describe('RoversGalleryComponent', () => {
  let component: RoversGalleryComponent;
  let fixture: ComponentFixture<RoversGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoversGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoversGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
