import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from '@ngneat/dialog';
import { NgxSsrCacheModule } from '@ngx-ssr/cache';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APIInterceptor } from './utils/api.interceptor';
import { TransferHttpCacheModule } from '@nguniversal/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    DialogModule.forRoot(),
    AppRoutingModule,
    TransferHttpCacheModule,
    NgxSsrCacheModule.configLruCache({ maxAge: 60000, maxSize: 50 }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
