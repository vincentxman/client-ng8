import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChildAuxRouterTestComponent } from './my-child-aux-router-test.component';

describe('MyChildAuxRouterTestComponent', () => {
  let component: MyChildAuxRouterTestComponent;
  let fixture: ComponentFixture<MyChildAuxRouterTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChildAuxRouterTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChildAuxRouterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
