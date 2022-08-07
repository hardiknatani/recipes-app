import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

   @Input() recipe!:Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {

  }

  toShopppingList(ingredients:Ingredient[]){
this.recipeService.addToShoppingList(ingredients)
  }

}
