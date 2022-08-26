import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FinancesComponent } from './finances/finances.component';
import { CatorgiesComponent } from './catorgies/catorgies.component';

const routes: Routes = [
  {path:'finances',component:FinancesComponent},
  {path:'catorgies',component:CatorgiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
