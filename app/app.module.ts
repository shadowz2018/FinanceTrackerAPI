import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatorgiesComponent } from './catorgies/catorgies.component';
import { ShowCatorComponent } from './catorgies/show-cator/show-cator.component';
import { AddEditCatorComponent } from './catorgies/add-edit-cator/add-edit-cator.component';
import { FinancesComponent } from './finances/finances.component';
import { ShowFinComponent } from './finances/show-fin/show-fin.component';
import { AddEditFinComponent } from './finances/add-edit-fin/add-edit-fin.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CatorgiesComponent,
    ShowCatorComponent,
    AddEditCatorComponent,
    FinancesComponent,
    ShowFinComponent,
    AddEditFinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
