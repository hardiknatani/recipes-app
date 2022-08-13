import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { RecipeService } from 'src/app/shared/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe!:Recipe;
  id!:number
  constructor(private recipeService:RecipeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  this.route.params.subscribe(
    (params:Params)=>{
  this.id=+params["id"];
  this.recipe=this.recipeService.getRecipe(this.id)
    }
  )

  }

  toShopppingList(ingredients:Ingredient[]){
this.recipeService.addToShoppingList(ingredients)
  }

  onEditRecipe(){
this.router.navigate(['edit'],{relativeTo:this.route});

  }

  onDelete(){
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate(["/recipes"])
  }


}
