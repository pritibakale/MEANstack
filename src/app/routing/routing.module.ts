import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { RoutingRoutingModule } from './routing-routing.module';
import { PostCreateComponent } from '../post-create/post-create.component';
import { PostListComponent } from '../post-list/post-list.component';


//define routes for each component
const routes: Routes = [
  { path:'', component: PostListComponent },
  { path:'createpost', component: PostCreateComponent },
  { path:'editpost/:postId', component: PostCreateComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingRoutingModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
