import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingService } from 'src/app/shared/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild ('nameInput') nameInputRef!:ElementRef
  @ViewChild ('amountInput') amountInputRef!:ElementRef


  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
  }

  addItem(){
    let newItem = this.nameInputRef.nativeElement.value;
    let newItemAmount = this.amountInputRef.nativeElement.value;

    this.shoppingService.shoppingList.push(new Ingredient(newItem,newItemAmount))

  }

}
