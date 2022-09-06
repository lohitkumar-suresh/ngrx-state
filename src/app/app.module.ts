import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeansListComponent } from './beans/beans-list/beans-list.component';
import { appReducer } from './store/app.state';
import { ViewBeanComponent } from './beans/view-bean/view-bean.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material
import {MatTableModule} from '@angular/material/table';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BeansEffects } from './beans/state/beans.effects';


@NgModule({
  declarations: [
    AppComponent,
    BeansListComponent,
    ViewBeanComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    EffectsModule.forRoot([BeansEffects]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
