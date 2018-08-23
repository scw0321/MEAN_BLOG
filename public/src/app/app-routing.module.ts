import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
	{path: "posts", component: HomeComponent},
	{path: "posts/new", component: NewComponent},
	{path: "posts/:id", component: ShowComponent},
	{path: "posts/update/:id", component: UpdateComponent},
	{path: "posts/comment/:id", component: CommentComponent},
	{path: "", pathMatch: "full", redirectTo: "posts"},
	{path: "**", pathMatch: "full", redirectTo: "posts"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
