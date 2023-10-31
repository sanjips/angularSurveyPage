import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { LoginComponent } from '../app/login/login.component';
 import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 import { fakeBackendProvider } from 'src/app/_helpers/fake-backend';
 import { JwtInterceptor,  } from 'src/app/_helpers/jwt.interceptor';
 import { ErrorInterceptor } from 'src/app/_helpers/error.interceptor';

 import { BrowserAnimationsModule } 
 from '@angular/platform-browser/animations'; 

 import { AlertComponent } from 'src/app/_components/alert.component';
 import { HomeComponent } from 'src/app/home/home.component';
 import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule,AlertConfig } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { PaginationModule,PaginationConfig } from 'ngx-bootstrap/pagination';
import { PopoverModule, PopoverConfig } from 'ngx-bootstrap/popover';
import { ProgressbarModule,ProgressbarConfig } from 'ngx-bootstrap/progressbar';
import { RatingModule, RatingConfig } from 'ngx-bootstrap/rating';
import { SortableModule, DraggableItemService } from 'ngx-bootstrap/sortable';
import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';
@NgModule({
  declarations: [
    AppComponent,
  LoginComponent,
  AlertComponent,
  HomeComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    CommonModule,
    
    NgbModule ,
    



    AccordionModule,
    PaginationModule,
    PopoverModule,
    ProgressbarModule,
    RatingModule,
    SortableModule,
    TabsModule







  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,

    AlertConfig, 
      BsDatepickerConfig, 
      BsDropdownConfig,
      PaginationConfig,
      ProgressbarConfig,
      RatingConfig,
      DraggableItemService,
      TabsetConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// used to create fake backend

