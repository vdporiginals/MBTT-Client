import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { NgxSsrTimeoutModule } from '@ngx-ssr/timeout';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    NgxSsrTimeoutModule.forRoot({ timeout: 20000 }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
