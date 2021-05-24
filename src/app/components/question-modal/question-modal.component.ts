import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.scss'],
})
export class QuestionModalComponent implements OnInit {
  content = '';
  constructor(private http: HttpClient, private ref: DialogRef) {}

  ngOnInit(): void {}
  sendQuestion() {
    this.http
      .post('product/question', {
        ProductId: +this.ref.data.id,
        Title: '',
        Content: this.content,
        Type: 1,
        Status: 1,
      })
      .subscribe(() => {
        this.ref.close();
      });
  }
}

@NgModule({
  declarations: [QuestionModalComponent],
  imports: [RouterModule, FormsModule, CommonModule],
  exports: [QuestionModalComponent],
})
export class QuestionModalModule {}
