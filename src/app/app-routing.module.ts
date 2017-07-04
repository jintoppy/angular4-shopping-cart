import { PopupComponent } from './popup/popup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { DemoComponent } from './demo/demo.component';
import { RoutingComponent } from './routing/routing.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: ProductCatalogComponent},
    {path: 'demo', component: DemoComponent},
    {path: 'routing/:id', component: RoutingComponent},
    {path: 'compose', component: PopupComponent, outlet: 'popup'}
];

//{ useHash: true }
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
