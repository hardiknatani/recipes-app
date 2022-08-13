import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AuthGaurdServiceService } from './auth-gaurd-service.service';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes:Routes=[
  {path:"",component:HomeComponent},
  {path:"recipes",canActivate:[AuthGaurdServiceService],component:RecipesComponent,
  children:[
    {path:"",component:RecipeStartComponent},
    {path:"new",component:RecipeEditComponent},
    {path:":id",component:RecipeDetailComponent},
    {path:":id/edit",component:RecipeEditComponent}]},
  {path:"shopping",canActivate:[AuthGaurdServiceService],component:ShoppingListComponent},

  {path:"not-found",component:PageNotFoundComponentComponent},
  {path:"**" ,redirectTo:"/not-found"}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
