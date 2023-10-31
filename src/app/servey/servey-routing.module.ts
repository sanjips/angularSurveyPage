import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { LayoutComponent } from './layout.component';
// import { ListComponent } from './list.component';
// import { AddEditComponent } from './add-edit.component';

 import { LayoutComponent } from '../account/layout.component';
import { ServeyComponent } from './servey.component';
// import { ListComponent } from '../users/list.component';
// import { AddEditComponent } from '../users/add-edit.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
const routes: Routes = [
    {
        
        path: '', component: ServeyComponent,
        children: [
            { path: '', component: ServeyComponent },
            // { path: 'add', component: AddEditComponent },
            // { path: 'edit/:id', component: AddEditComponent }
        ]
    }

];


@NgModule({
    imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule
],
declarations: [],
  exports: [RouterModule]
})
export class ServeyRoutingModule { }