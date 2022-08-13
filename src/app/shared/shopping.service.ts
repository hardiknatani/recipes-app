import { EventEmitter, Injectable, Output } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "./ingredients.model";

@Injectable()
export class ShoppingService{

   
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    shoppingList:Ingredient[]=[
        new Ingredient("Flour",25),
        new Ingredient("Flour",25),new Ingredient("Flour",25)

    ]

    getIngredient(id:number){
        return this.shoppingList[id]
    }
    
    addtoList(ingredient:Ingredient){

        this.shoppingList.push(ingredient)
        this.ingredientsChanged.next(this.shoppingList.slice())
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.shoppingList[index] = newIngredient;
        this.ingredientsChanged.next(this.shoppingList.slice());
      }

    removeFromList(index:number){
    this.shoppingList.splice(index, 1);
    this.ingredientsChanged.next(this.shoppingList.slice());

    }



}