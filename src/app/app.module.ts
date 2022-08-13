import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule}  from "@angular/material/menu"
import {MatCardModule} from "@angular/material/card"
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from "@angular/material/divider"
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button"
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingService } from './shared/shopping.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AuthGaurdServiceService } from './auth-gaurd-service.service';
import { AuthService } from './authService';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './shared/recipe.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    HomeComponent,
    PageNotFoundComponentComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    
  ],
  imports: [
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingService,AuthGaurdServiceService,AuthService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
