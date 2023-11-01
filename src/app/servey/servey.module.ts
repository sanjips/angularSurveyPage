import { NgModule ,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from '../users/users-routing.module';
import { LayoutComponent } from '../account/layout.component';
import { ListComponent } from '../users/list.component';
import { AddEditComponent } from '../users/add-edit.component';
import { ServeyRoutingModule } from './servey-routing.module';
import { TabsModule} from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } 
from '@angular/platform-browser/animations'; 
import { NgbModule }  
from '@ng-bootstrap/ng-bootstrap'; 
import { TabsetComponent } from 'ngx-bootstrap/tabs';


import { BrowserModule } from "@angular/platform-browser";
import { ServeyComponent } from './servey.component';
import { SearchPipe } from 'src/search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
    imports: [
        ReactiveFormsModule,
        ServeyRoutingModule,
        NgbModule,
        TabsModule.forRoot(),
        CommonModule,
        FormsModule,
        NgxPaginationModule
       //BrowserModule,
       

    ],
    declarations: [
        ServeyComponent,
        SearchPipe
      ],
    
    
    exports:[
        TabsModule,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
      providers:[SearchPipe]
})
export class ServeyModule { }