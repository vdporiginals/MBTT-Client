import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [ProductListCarouselComponent],
  imports: [SwiperModule, BarRatingModule, CommonModule],
  exports: [ProductListCarouselComponent],
})
export class ProductListCarouselModule {}
