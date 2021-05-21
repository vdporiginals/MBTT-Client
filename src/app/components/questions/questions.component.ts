import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question } from 'src/app/models/product.interface';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  @Input() question: Question;
  @Input() reply;
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [QuestionsComponent],
  imports: [CommonModule, FormsModule, TextFieldModule],
  exports: [QuestionsComponent],
})
export class QuestionsModule {}
