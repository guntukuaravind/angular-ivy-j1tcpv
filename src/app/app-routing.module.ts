import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardProductComponent } from './board-product/board-product.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminControlComponent } from './admin-control/admin-control.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'pro', component: BoardProductComponent },
  { path: 'admin', component: BoardAdminComponent },
  {path:'products',component:ProductListComponent},
  {path:'products/:id',component:ProductDetailsComponent},
  {path:'add',component:AddProductComponent},
  {path: 'admin-control',component:AdminControlComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
