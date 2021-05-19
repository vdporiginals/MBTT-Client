import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BarRatingModule } from 'ngx-bar-rating';
import { CardStatusModule } from 'src/app/components/card-status/card-status.component';
import { CardModule } from 'src/app/components/card/card.component';
import { CommentsModule } from 'src/app/components/comments/comments.component';
import { ProductCarouselModule } from 'src/app/components/product-carousel/product-carousel.component';
import { ProductListCarouselModule } from 'src/app/components/product-list-carousel/product-list-carousel.component';
import { ProductDetailComponent } from './product-detail.component';
import { productDetailRoutes } from './product-detail.routes';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(productDetailRoutes),
    ProductListCarouselModule,
    ProductCarouselModule,
    CardModule,
    CommentsModule,
    BarRatingModule,
    CardStatusModule,
  ],
})
export class ProductDetailModule {}
