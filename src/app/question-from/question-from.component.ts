import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from '../quiz.model';

@Component({
  selector: 'app-question-from',
  templateUrl: './question-from.component.html',
  styleUrls: ['./question-from.component.scss']
})
export class QuestionFromComponent implements OnInit {

  @Input() question: Question;
  @Output() onChoiceMade = new EventEmitter<string>();

  private form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      choice: new FormControl()
    });

    this.form.valueChanges.subscribe(this.onChange);
  }

  onChange = () => {
    this.onChoiceMade.emit(this.form.value.choice);
  }
}
