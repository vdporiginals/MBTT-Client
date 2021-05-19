import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  OnInit,
} from '@angular/core';
import { SwiperModule } from 'swiper/angular';
@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCarouselComponent implements OnInit {
  @Input() imgList: string[];
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [ProductCarouselComponent],
  imports: [SwiperModule, CommonModule],
  exports: [ProductCarouselComponent],
})
export class ProductCarouselModule {}
