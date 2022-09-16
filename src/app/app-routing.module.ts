import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsComponent } from './products/products.component';
import { ApplicationUsersComponent } from './application-users/application-users.component';
import { ApplicationUsersFormComponent } from './application-users-form/application-users-form.component';

const routes: Routes = [
  {path:"", redirectTo: "home", pathMatch: "full"},
  {path:"home", component: HomeComponent},
  {path:"products/form", component: ProductsFormComponent},
  {path:"products", component: ProductsComponent},
  {path:"users", component: ApplicationUsersComponent},
  {path:"users/form", component: ApplicationUsersFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
