import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhCatComponent } from './gh-cat.component';

describe('GhCatComponent', () => {
  let component: GhCatComponent;
  let fixture: ComponentFixture<GhCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
