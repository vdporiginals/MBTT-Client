import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from '@ngneat/dialog';
import { NgxSsrCacheModule } from '@ngx-ssr/cache';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APIInterceptor } from './utils/api.interceptor';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    DialogModule.forRoot(),
    AppRoutingModule,
    TransferHttpCacheModule,
    // NgxSsrCacheModule.configLruCache({ maxAge: 60000, maxSize: 50 }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
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
