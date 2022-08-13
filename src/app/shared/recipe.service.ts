import { Injectable,Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "./ingredients.model";
import { ShoppingService } from "./shopping.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{

    recipesChanged= new Subject<Recipe[]>();


    recipeList:Recipe[]=[
        new Recipe("Pizza","This is a pizza recipe","", [new Ingredient("Flour",1),new Ingredient("Tomato",5),new Ingredient("Cheese",1)] ),
        new Recipe("Burger","This is a Burger recipe  ","",[new Ingredient("Buns",2),new Ingredient("Sauce",1),new Ingredient("Meat",1)] ),
    ]

    constructor(private shoppingService:ShoppingService){}

addToShoppingList(ingredients:Ingredient[]){
for(let ingredient of ingredients){
    this.shoppingService.addtoList(ingredient)
}
}

getRecipe(index:number){
    return this.recipeList[index]
}



addRecipe(recipeForm:Recipe){

    let ingredientsArray=[]
    for (let i of recipeForm.ingredients){
        ingredientsArray.push(new Ingredient(i.name,i.amount))
    }
    this.recipeList.push(
        new Recipe(recipeForm.name,recipeForm.description,recipeForm.imagePath,[...ingredientsArray])
    )
    this.recipesChanged.next(this.recipeList.slice());

}

updateRecipe(id:number,recipeForm:Recipe){

    this.recipeList[id]=recipeForm;
    this.recipesChanged.next(this.recipeList.slice());

}

deleteRecipe(id:number){
    this.recipeList.splice(id,1);
    this.recipesChanged.next(this.recipeList.slice())
}

}