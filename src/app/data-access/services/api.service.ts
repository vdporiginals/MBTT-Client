import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '@consult-indochina/base';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseApiService<any> {
  constructor(http: HttpClient) {
    super(http, 'product');
  }
}
