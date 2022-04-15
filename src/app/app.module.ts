import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarComponent } from './common/menubar/menubar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ContactboxComponent } from './pages/contact/contactbox/contactbox.component';
import { ServiceComponent } from './pages/service/service.component';
import { ServiceboxComponent } from './pages/service/servicebox/servicebox.component';
import { DetailsComponent } from './pages/details/details.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EnquiryFormComponent } from './pages/enquiry-form/enquiry-form.component';
import { ServicesComponent } from './pages/home/services/services.component';
import { FeedfilterPipe } from './pipes/feedfilter.pipe';
import { FeedbackComponent } from './pages/about/feedback/feedback.component';
import { FeedbackBoxComponent } from './pages/about/feedback-box/feedback-box.component';
import { FunPipe } from './pipes/fun.pipe';
import { importType } from '@angular/compiler/src/output/output_ast';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader,TranslateModule } from '@ngx-translate/core';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient,'./assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ContactboxComponent,
    ServiceComponent,
    ServiceboxComponent,
    DetailsComponent,
    EnquiryFormComponent,
    ServicesComponent,
    FeedfilterPipe,
    FeedbackComponent,
    FeedbackBoxComponent,
    FunPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }     
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }