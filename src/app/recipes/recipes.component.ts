import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {


  recipeDetails!:Recipe

  // setRecipe(recipeDetails:Recipe){
  //   console.log(recipeDetails)
  //   console.log(this.recipeDetails)
  //   this.recipeDetails=recipeDetails

  // }

  constructor() { }

  ngOnInit(){
    console.log("hey",this.recipeDetails)
  }



}
