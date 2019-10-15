import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWrapperExerciseComponent } from './page-wrapper-exercise.component';

describe('PageWrapperExerciseComponent', () => {
  let component: PageWrapperExerciseComponent;
  let fixture: ComponentFixture<PageWrapperExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWrapperExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWrapperExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
