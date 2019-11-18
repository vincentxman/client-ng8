import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChildRouterTestComponent } from './my-child-router-test.component';

describe('MyChildRouterTestComponent', () => {
  let component: MyChildRouterTestComponent;
  let fixture: ComponentFixture<MyChildRouterTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChildRouterTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChildRouterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
