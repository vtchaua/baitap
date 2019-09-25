import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ProductsComponent } from './products/products.component';
import { ShowComponent } from './show/show.component';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { Bai3Component } from './bai3/bai3.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';
import { ListStudentComponent } from './list-student/list-student.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ProductsComponent,
    ShowComponent,
    Bai1Component,
    Bai2Component,
    Bai3Component,
    DetailCourseComponent,
    ListStudentComponent,
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot([ 
      { path: '', 	component: ListStudentComponent }, 
      {path: 'list-stusent', component:ListStudentComponent},
      {path: 'list-product', component:ProductsComponent},
      {path: 'bai1', component:Bai1Component},
      {path: 'bai2', component:Bai2Component},
      {path: 'bai3', component:Bai3Component},
      {path: 'detail/:id', component:DetailComponent},
      { path: 'detail-course/:ID', component: DetailCourseComponent },
      { path: '**', redirectTo: 'list-stusent', pathMatch: 'full' },
     
    ]) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
