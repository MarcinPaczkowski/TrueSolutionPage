import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { environment } from '../environments/environment';

import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export function createTranslateLoader(http: HttpClient) {
  const translatePrefix = `${environment.assetsDir}assets/i18n/`;
  return new TranslateHttpLoader(http, translatePrefix, '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    appRouting,
    CommonModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
