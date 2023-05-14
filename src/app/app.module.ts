import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProfileComponent } from './user/profile/profile.component';
import { InputComponent } from './basic/input/input.component';
import { CardComponent } from './basic/card/card.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './user/login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { MaterialModule } from './shared/material.module';
import { OurServicesComponent } from './home/our-services/our-services.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { FaqComponent } from './home/faq/faq.component';
import { WorkflowComponent } from './home/workflow/workflow.component';
import { RegisterComponent } from './user/register/register.component';
import { SectionCardsComponent } from './home/section-cards/section-cards.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from './basic/loader/loader.component';
import { LoaderInterceptor } from './basic/loader/loader.interceptor';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { BannersComponent } from './banners/banners.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    InputComponent,
    CardComponent,
    LoginComponent,
    OurServicesComponent,
    ContactUsComponent,
    FaqComponent,
    WorkflowComponent,
    RegisterComponent,
    SectionCardsComponent,
    LoaderComponent,
    AboutUsComponent,
    BannersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    DashboardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
