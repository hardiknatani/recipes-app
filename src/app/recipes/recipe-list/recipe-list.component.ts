import { Component, OnInit, Output , EventEmitter } from '@angular/core';

import {Recipe} from "../recipe.model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe("Pizza","This is a pizza recipe","https://cheflolaskitchen.com/wp-content/uploads/2021/04/homemade-pizza-recipe-2-685x1024.jpg.webp" ),
    new Recipe("Pizza","This is a pasta recipe  ","https://cheflolaskitchen.com/wp-content/uploads/2021/04/homemade-pizza-recipe-2-685x1024.jpg.webp" )
,
new Recipe("Pizza","This is a pizza recipe","https://cheflolaskitchen.com/wp-content/uploads/2021/04/homemade-pizza-recipe-2-685x1024.jpg.webp" ),
new Recipe("Pizza","This is a pasta recipe  ","https://cheflolaskitchen.com/wp-content/uploads/2021/04/homemade-pizza-recipe-2-685x1024.jpg.webp" )
]


  selectedRecipe(recipe:Recipe){
  
this.recipeWasSelected.emit(recipe)

  }



  constructor() { }

  ngOnInit(): void {
  }

}
