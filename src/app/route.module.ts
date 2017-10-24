import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {AdminComponent} from "./admin/admin.component";
/**
 * Created by xuhui on 2017/10/20.
 */

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin/userList',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    redirectTo: 'admin/userList'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class RouteModule { }
