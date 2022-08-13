import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingService } from '../shared/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {



  ingredients:Ingredient[]=[  ];
  private igChangedSub!:Subscription

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(){
    this.ingredients=this.shoppingService.shoppingList
    this.igChangedSub =  this.shoppingService.ingredientsChanged
    .subscribe(
      (updatedIngredients:Ingredient[])=>{
    this.ingredients=updatedIngredients
    })
  }

  OnStartedEditing(index:number){
    this.shoppingService.startedEditing.next(index)
  }

    ngOnDestroy() {
      this.igChangedSub.unsubscribe();
    }
  

}
