import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() viewRecipe = new EventEmitter<void>();

  @Input() recipe!:Recipe ;

  selectList(){
    // console.log(recipe)

    this.viewRecipe.emit();
    }


  constructor() { }

  ngOnInit(): void {
  }

}
