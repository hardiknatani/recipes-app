import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/shared/recipe.service';

import {Recipe} from "../../shared/recipe.model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {


recipes:Recipe[]=[]
index!:number;
recipeChangedSub!:Subscription;



  constructor( private recipeService:RecipeService) { }

  ngOnInit() {
 this.recipeChangedSub=   this.recipeService.recipesChanged.subscribe((recipes)=>{
      this.recipes=recipes
    });
    this.recipes=this.recipeService.recipeList;


  }

  ngOnDestroy(): void {
    this.recipeChangedSub.unsubscribe()
  }

}
