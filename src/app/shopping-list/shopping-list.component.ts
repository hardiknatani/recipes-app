import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients=[
    new Ingredient("Flour",25),
    new Ingredient("Flour",25)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
