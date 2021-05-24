import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '@consult-indochina/base';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseApiService<any> {
  constructor(http: HttpClient) {
    super(http, 'product');
  }

  postRating(data): Observable<any> {
    return this.http.post('product/rating', data);
  }
}
