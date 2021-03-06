import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

import { AuthService } from './providers/auth/auth.service';
import { ListService } from './providers/list/list.service';
import { ItemService } from './providers/item/item.service';
import { NavService } from './providers/nav/nav.service';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reset', component: ResetComponent},
  {path: 'confirm', component:ConfirmComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'edit', component:EditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ResetComponent,
    ConfirmComponent,
    HomeComponent,
    DashboardComponent,
    FooterComponent,
    NavComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [
    AuthService,
    ListService,
    ItemService,
    NavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
