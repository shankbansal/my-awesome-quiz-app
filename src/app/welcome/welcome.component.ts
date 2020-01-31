import { Quiz } from './../quiz.model';
import { QuestionsService } from './../questions.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  private quizzes: Quiz[];

  constructor(private questionsService: QuestionsService, private route: ActivatedRoute) { }

  ngOnInit() {

    // read from the dynamic route and load the proper quiz data
    this.questionsService.getQuizzes()
      .subscribe(quizzes => {
        // initialize everything
        this.quizzes = quizzes;
      });
  }

}
