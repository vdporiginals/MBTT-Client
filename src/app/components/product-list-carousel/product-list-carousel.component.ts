import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BarRatingModule } from 'ngx-bar-rating';
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-product-list-carousel',
  templateUrl: './product-list-carousel.component.html',
  styleUrls: ['./product-list-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListCarouselComponent implements OnInit {
  @Input() producList: any[];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  routeTo(ev) {
    // window.location.href
    this.router.navigate(['/', ev]);
  }
}

@NgModule({
  declarations: [ProductListCarouselComponent],
  imports: [
    SwiperModule,
    RouterModule,
    BarRatingModule,
    FormsModule,
    CommonModule,
  ],
  exports: [ProductListCarouselComponent],
})
export class ProductListCarouselModule {}
