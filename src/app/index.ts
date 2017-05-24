import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './routes';
import { store } from './reducers';
import { RootPage } from './pages/Root.page';
import { IndexPage } from './pages/Index.page';
import { FooterComponent } from './components/Footer.component';
import { HeaderComponent } from './components/Header.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    routing,
    store,
    NgbModule.forRoot(),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 10
    })
  ],
  declarations: [
    RootPage,
    IndexPage,

    HeaderComponent,
    FooterComponent,
  ],
  providers: [ ],
  bootstrap: [RootPage]
})
export class AppModule {}
