import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingService } from '../shared/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {



  ingredients:Ingredient[]=[  ]

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(){
    this.ingredients=this.shoppingService.shoppingList
    this.shoppingService.ingredientsChanged.subscribe((updatedIngredients:Ingredient[])=>{
    this.ingredients=updatedIngredients
    })
  }

  

}
