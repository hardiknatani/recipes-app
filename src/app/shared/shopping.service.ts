import { EventEmitter, Injectable, Output } from "@angular/core";
import { Ingredient } from "./ingredients.model";

@Injectable()
export class ShoppingService{

    @Output()  ingredientsChanged= new EventEmitter<Ingredient[]>()

    shoppingList:Ingredient[]=[
        new Ingredient("Flour",25),
        new Ingredient("Flour",25),new Ingredient("Flour",25)

    ]
    
    addtoList(ingredient:Ingredient){

        this.shoppingList.push(ingredient)
        this.ingredientsChanged.emit(this.shoppingList)
    }

    removeFromList(){

    }



}