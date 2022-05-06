import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './views/header/header.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { AppRoutesModule } from './routing/app-routes.module';
import { FourofourComponent } from './views/fourofour/fourofour.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './views/dashboard/dashboard.component';

// material
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { BuyproductComponent } from './views/buyproduct/buyproduct.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    FourofourComponent,
    DashboardComponent,
    SidebarComponent,
    BuyproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFTOKEN',
    }),
    AppRoutesModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule
    
  ],
  providers: [AuthGuard, {
    provide : HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
