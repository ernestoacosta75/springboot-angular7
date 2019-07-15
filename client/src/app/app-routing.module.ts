import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from "@app/components/car/car-list.component";
import { CarEditComponent } from "@app/components/car/car-edit.component";
import { HomeComponent } from '@app/components/home/home.component';
import { OktaCallbackComponent } from '@okta/okta-angular';

const routes: Routes = [  
  {path: 'home', component: HomeComponent },
  {path: 'car-list', component: CarListComponent },
  {path: 'car-add', component: CarEditComponent },
  {path: 'car-edit/:id', component: CarEditComponent },
  {path: 'implicit/callback', component: OktaCallbackComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
