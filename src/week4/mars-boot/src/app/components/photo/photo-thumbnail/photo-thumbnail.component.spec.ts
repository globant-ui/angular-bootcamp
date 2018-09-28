import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoThumbnailComponent } from './photo-thumbnail.component';

describe('PhotoThumbnailComponent', () => {
  let component: PhotoThumbnailComponent;
  let fixture: ComponentFixture<PhotoThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
