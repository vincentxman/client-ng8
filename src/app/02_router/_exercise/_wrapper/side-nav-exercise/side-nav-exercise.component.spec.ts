import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavExerciseComponent } from './side-nav-exercise.component';

describe('SideNavExerciseComponent', () => {
  let component: SideNavExerciseComponent;
  let fixture: ComponentFixture<SideNavExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
