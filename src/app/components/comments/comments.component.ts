import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';
import { RatingProduct } from 'src/app/models/product.interface';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() rating: RatingProduct;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [CommentsComponent],
  imports: [CommonModule, FormsModule, BarRatingModule, TextFieldModule],
  exports: [CommentsComponent],
})
export class CommentsModule {}
