import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFromComponent } from './question-from.component';

describe('QuestionFromComponent', () => {
  let component: QuestionFromComponent;
  let fixture: ComponentFixture<QuestionFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
