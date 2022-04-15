import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { EnquiryFormComponent } from './pages/enquiry-form/enquiry-form.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';

const routes: Routes = [
   {path:"",component: HomeComponent},
   {path:"abtpage",component: AboutComponent},
   {path:"contact",component: ContactComponent},
   {path:"service",component: ServiceComponent},
   {path:"home/:id",component:DetailsComponent},
   {path:"enquiry-form",component:EnquiryFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }