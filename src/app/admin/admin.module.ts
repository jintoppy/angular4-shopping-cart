import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AdminDashboardComponent } from "./admin-dashboard.component";

import {AdminRoutingModule} from './admin-routing.module';

import { AuthGuard } from './auth-guard.service';


@NgModule({
    imports: [
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        ManageUsersComponent,
        AdminDashboardComponent
    ],
    providers: [AuthGuard]
})
export class AdminModule {}