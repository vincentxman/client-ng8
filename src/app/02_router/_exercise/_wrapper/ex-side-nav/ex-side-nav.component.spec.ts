import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExSideNavComponent } from './ex-side-nav.component';

describe('ExSideNavComponent', () => {
  let component: ExSideNavComponent;
  let fixture: ComponentFixture<ExSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
