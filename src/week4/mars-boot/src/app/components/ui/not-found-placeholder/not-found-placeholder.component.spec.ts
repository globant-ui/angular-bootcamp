import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPlaceholderComponent } from './not-found-placeholder.component';

describe('NotFoundPlaceholderComponent', () => {
  let component: NotFoundPlaceholderComponent;
  let fixture: ComponentFixture<NotFoundPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
