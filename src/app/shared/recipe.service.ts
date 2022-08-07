import { Injectable,Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "./ingredients.model";
import { ShoppingService } from "./shopping.service";

@Injectable()
export class RecipeService{

recipeWasSelected = new EventEmitter<Recipe>()

    recipeList:Recipe[]=[
        new Recipe("Pizza","This is a pizza recipe","https://cheflolaskitchen.com/wp-content/uploads/2021/04/homemade-pizza-recipe-2-685x1024.jpg.webp", [new Ingredient("Flour",1),new Ingredient("Tomato",5),new Ingredient("Cheese",1)] ),
    new Recipe("Burger","This is a Burger recipe  ","https://cheflolaskitchen.com/wp-content/uploads/2021/04/homemade-pizza-recipe-2-685x1024.jpg.webp",[new Ingredient("Buns",2),new Ingredient("Sauce",1),new Ingredient("Meat",1)] ),
    ]

    constructor(private shoppingService:ShoppingService){}

addToShoppingList(ingredients:Ingredient[]){
for(let ingredient of ingredients){
    this.shoppingService.addtoList(ingredient)
}
}

}