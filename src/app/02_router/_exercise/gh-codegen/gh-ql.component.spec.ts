import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhQLComponent } from './gh-ql.component';

describe('GhQLComponent', () => {
  let component: GhQLComponent;
  let fixture: ComponentFixture<GhQLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhQLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhQLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
