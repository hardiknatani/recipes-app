import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { Recipe } from '../shared/recipe.model';
import { RecipeService } from '../shared/recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {


  recipeDetails!:Recipe



  constructor( private recipeService:RecipeService) { }

  ngOnInit(){
  this.recipeService.recipeWasSelected.subscribe((recipe:Recipe)=>{this.recipeDetails=recipe})
  }



}
