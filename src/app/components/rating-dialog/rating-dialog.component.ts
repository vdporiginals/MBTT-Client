import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogRef } from '@ngneat/dialog';
import { BarRatingModule } from 'ngx-bar-rating';
import { ApiService } from 'src/app/data-access/services/api.service';

@Component({
  selector: 'app-rating-dialog',
  templateUrl: './rating-dialog.component.html',
  styleUrls: ['./rating-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingDialogComponent implements OnInit {
  rating = 0;
  content = '';
  constructor(private http: HttpClient, public ref: DialogRef) {}

  ngOnInit(): void {}

  sendRating() {
    console.log(this.ref.data);

    let data = {
      ProductId: +this.ref.data.id,
      Value: this.rating,
      Content: this.content,
      Type: 1,
      Status: 1,
    };
    this.http.post('product/rating', data).subscribe((r) => {
      this.ref.close();
    });
  }
}

@NgModule({
  declarations: [RatingDialogComponent],
  imports: [RouterModule, BarRatingModule, FormsModule, CommonModule],
  exports: [RatingDialogComponent],
})
export class RatingDialogModule {}
