import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path: "posts", pathMatch: "full", component: HomeComponent},
  {path: "posts/show/:id", pathMatch: "full", component: ShowComponent},
  {path: "", pathMatch: "full", redirectTo: "posts"},
  {path: "**", pathMatch: "full", redirectTo: "posts"},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
