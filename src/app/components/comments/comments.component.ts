import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [CommentsComponent],
  imports: [CommonModule, TextFieldModule],
  exports: [CommentsComponent],
})
export class CommentsModule {}
