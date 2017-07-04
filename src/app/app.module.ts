import { HighlightDirective } from './demo/directive/highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';

import { AppComponent } from './app.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-catalog/product-list/product-list.component';
import { AddProductComponent } from './product-catalog/add-product/add-product.component';
import { DemoComponent } from './demo/demo.component';
import { SimpleFormComponent } from './demo/simple-form/simple-form.component';
import { ReactiveFormComponent } from './demo/reactive-form/reactive-form.component';
import { LifecycleComponent } from './demo/lifecycle/lifecycle.component';
import { ServiceComponent } from './demo/service/service.component';
import { ComponentComponent } from './demo/component/component.component';
import { DirectiveComponent } from './demo/directive/directive.component';
import { PipeComponent } from './demo/pipe/pipe.component';
import { ParentComponent } from './demo/component/parent/parent.component';
import { ShortenPipe } from './demo/pipe/shorten.pipe';
import { ChildComponent } from './demo/component/child/child.component';
import { DemoServiceService } from './demo/demo-service.service';
import { ObservableComponent } from './demo/observable/observable.component';
import { RoutingComponent } from './routing/routing.component';
import { PopupComponent } from './popup/popup.component';

import {MyErrorHandler} from './myerrorhandler';


import {reducer} from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogComponent,
    CartComponent,
    ProductListComponent,
    AddProductComponent,
    DemoComponent,
    SimpleFormComponent,
    ReactiveFormComponent,
    LifecycleComponent,
    ServiceComponent,
    ComponentComponent,
    DirectiveComponent,
    PipeComponent,
    ParentComponent,
    ChildComponent,
    ShortenPipe,
    HighlightDirective,
    ObservableComponent,
    RoutingComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
      DemoServiceService,
      {provide: ErrorHandler, useClass: MyErrorHandler}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
