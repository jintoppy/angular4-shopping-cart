import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AdminDashboardComponent } from "./admin-dashboard.component";

import { AuthGuard } from './auth-guard.service';

import { UserResolver } from './user-resolver.service';


const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: AdminDashboardComponent
            },
            {
                path: 'manage',
                component: ManageUsersComponent,
                resolve: {
                    user: UserResolver
                }
            }
        ]

    }
]
@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [UserResolver]
})
export class AdminRoutingModule {}