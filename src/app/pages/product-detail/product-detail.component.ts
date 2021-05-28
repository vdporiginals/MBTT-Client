import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseResponse } from '@consult-indochina/base';
import { DialogService } from '@ngneat/dialog';
import { IS_SERVER_PLATFORM } from '@ngx-ssr/platform';
import { forkJoin, merge, Observable, of, Subject } from 'rxjs';
import { concatMap, map, takeUntil, tap } from 'rxjs/operators';
import { QuestionModalComponent } from 'src/app/components/question-modal/question-modal.component';
import { RatingDialogComponent } from 'src/app/components/rating-dialog/rating-dialog.component';
import { ApiService } from 'src/app/data-access/services/api.service';
import {
  AnswerQuestion,
  Company,
  Product,
  Question,
  RatingProduct,
  RelatedProduct,
} from 'src/app/models/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  numbOfQuestion = 1;
  overall = 5;
  product: any = {};
  listCard = [];
  currentId: Observable<any>;
  destroy$ = new Subject();
  detailProduct$: Observable<Product>;
  companyProduct$: Observable<Company>;
  mediaProduct$: Observable<{ MediaURL: string }[]>;
  questionProduct$: Observable<Question>;
  ratingProduct$: Observable<RatingProduct[]>;
  answerProduct$: Observable<AnswerQuestion>;
  certProduct$: Observable<{ MediaURL: string }[]>;
  relatedProduct$: Observable<RelatedProduct>;
  overallRating = {
    rate: 0,
    number: 0,
  };
  idParams;
  constructor(
    @Inject(IS_SERVER_PLATFORM) public isServer: boolean,
    private http: HttpClient,
    private dialog: DialogService,
    private route: ActivatedRoute,
    private currency: CurrencyPipe,
    private apiService: ApiService
  ) {
    this.currentId = this.route.params;
    this.route.params.subscribe((res) => {
      if (res) {
        this.idParams = res.id;
        this.initProduct(res.id);
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  openQuestionModal() {
    const dialogRef = this.dialog.open(QuestionModalComponent, {
      // height: '100%',
      data: {
        id: this.idParams,
      },
    });
    dialogRef.afterClosed$.subscribe(() => {
      this.getQuestionProduct(this.idParams).subscribe((res) => {
        this.questionProduct$ = of(res[0]);
      });
      this.detailProduct(this.idParams).subscribe((res) => {
        this.detailProduct$ = of(res.payload);
        this.overallRating = {
          rate: res.payload.RatingAVG,
          number: res.payload.RatingNumber,
        };
      });
    });
  }

  openRatingModal() {
    const dialogRef = this.dialog.open(RatingDialogComponent, {
      // height: '100%',
      data: {
        id: this.idParams,
      },
    });
    dialogRef.afterClosed$.subscribe(() => {
      this.getRatingProduct(this.idParams).subscribe((res) => {
        this.ratingProduct$ = of(res.payload);
      });
      this.detailProduct(this.idParams).subscribe((res) => {
        this.detailProduct$ = of(res.payload);
        this.overallRating = {
          rate: res.payload.RatingAVG,
          number: res.payload.RatingNumber,
        };
      });
    });
  }

  initProduct(id) {
    if (!this.isServer) {
      forkJoin([this.getMediaProduct(id), this.companyProduct(id)]).subscribe(
        ([media, comp]) => {
          this.mediaProduct$ = of(media.payload);
          this.relatedProduct$ = this.getRelateProduct(
            comp.payload.CompanyId
          ).pipe(map((a) => a.payload));
        }
      );
    }

    forkJoin([
      this.detailProduct(id),
      this.companyProduct(id),
      this.getQuestionProduct(id),
      this.getRatingProduct(id),
      this.getListCert(id),
    ]).subscribe(
      ([
        detailProduct,
        companyProduct,
        questionProduct,
        ratingProduct,
        certProduct,
      ]) => {
        this.detailProduct$ = of(detailProduct.payload);
        this.overallRating = {
          rate: detailProduct.payload.RatingAVG,
          number: detailProduct.payload.RatingNumber,
        };
        this.companyProduct$ = of(companyProduct.payload);
        this.questionProduct$ = of(questionProduct[0]);
        this.answerProduct$ = of(questionProduct[1].payload);
        // this.questionProduct$ = of(questionProduct.payload);
        this.ratingProduct$ = of(ratingProduct.payload);
        this.certProduct$ = of(certProduct.payload);
        this.listCard.forEach((val, i) => {
          let dataPush;
          if (i == 0) {
            dataPush = [
              {
                key: 'Name',
                Label: 'Tên:',
                Name: detailProduct.payload.Name,
              },
              {
                key: 'Price',
                Label: 'Giá (Niêm yết):',
                Price: this.currency.transform(
                  detailProduct.payload.Price,
                  'VND',
                  'symbol'
                ),
              },
              {
                key: 'Source',
                Label: 'Nguồn gốc:',
                Source: detailProduct.payload.Source,
              },
              {
                key: 'MediaURL',
                Label: 'Mã Vạch:',
                type: 'img',
                MediaURL: detailProduct.payload.MediaURL,
              },
              {
                key: 'Description',
                Label: 'Chi tiết:',
                Description: detailProduct.payload.Description,
              },
              {
                type: 'btn',
                btnArray: [
                  {
                    title: 'Xem thêm',
                    link: '',
                  },
                ],
              },
            ];
          } else if (i == 1) {
            dataPush = [
              {
                key: 'Name',
                Label: 'Tên:',
                Name: companyProduct.payload.Name,
              },
              {
                key: 'TaxCode',
                Label: 'MST:',
                TaxCode: companyProduct.payload.TaxCode,
              },
              {
                key: 'Addess',
                Label: 'Địa chỉ:',
                Addess: companyProduct.payload.Address,
              },
            ];
          } else {
            dataPush = [
              {
                key: 'Total',
                Label: 'Số lượng:',
                Total: '15 điểm bán',
              },
              {
                key: 'near',
                Label: 'Gần nhất:',
                near: 'Cách 500m - Vinmart Hồng Hà',
              },
              {
                type: 'btn',
                btnArray: [
                  {
                    title: 'Chỉ đường',
                    link: '',
                  },
                ],
              },
            ];
          }
          val.data = dataPush;
        });
        this.destroy$.next(true);
      }
    );
  }
  detailProduct(productId): Observable<BaseResponse<Product>> {
    return this.apiService.list({
      productId,
    }) as any;
  }

  companyProduct(productId): Observable<BaseResponse<Company>> {
    return this.apiService.detail('company', {
      productId,
    });
  }

  getMediaProduct(productId): Observable<BaseResponse<{ MediaURL: string }[]>> {
    return this.apiService.detail('media', {
      productId,
    });
  }

  getQuestionProduct(productId): Observable<any[]> {
    return this.apiService
      .detail('question', {
        productId,
        pageNumber: 1,
        pageSize: 1,
      })
      .pipe(
        concatMap((res) => {
          if (!res.payload) {
            return forkJoin([of([]), of([])]);
          }

          return forkJoin([
            of(res.payload[0]),
            this.getAnswerQuestion(res.payload[0].QuestionId),
          ]);
        })
      );
  }

  getAnswerQuestion(questId): Observable<BaseResponse<AnswerQuestion[]>> {
    return this.apiService.detail('question/answer', {
      questionId: questId,
      pageNumber: 1,
      pageSize: 1,
    });
  }

  getRatingProduct(productId): Observable<BaseResponse<RatingProduct[]>> {
    return this.apiService.detail('rating', {
      productId,
      pageNumber: 1,
      pageSize: 4,
    });
  }

  getListCert(productId): Observable<BaseResponse<{ MediaURL: string }[]>> {
    return this.apiService.detail('certification/media', {
      productId,
    });
  }

  getRelateProduct(companyId): Observable<BaseResponse<RelatedProduct>> {
    return this.apiService.detail('company/related-product', {
      companyId,
      pageNumber: 1,
      pageSize: 6,
    });
  }

  onBtnCardClick(link) {}
}
