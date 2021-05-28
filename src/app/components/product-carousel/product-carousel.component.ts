import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  OnInit,
} from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, {
  A11y,
  Autoplay,
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Virtual,
  Zoom,
} from 'swiper/core';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
]);

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCarouselComponent implements OnInit {
  @Input() imgList: { MediaURL: string }[];
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [ProductCarouselComponent],
  imports: [SwiperModule, CommonModule],
  exports: [ProductCarouselComponent],
})
export class ProductCarouselModule {}
