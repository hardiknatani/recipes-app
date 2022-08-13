import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingService } from 'src/app/shared/shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') slForm!:NgForm;

  subscription!:Subscription;
  editMode:boolean  =false;
  editedItem!:Ingredient;
  editItemIndex!:number;

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
    this.subscription=this.shoppingService.startedEditing.subscribe(
      (id)=>{
 
        this.editMode=true;
        this.editItemIndex=id;
       this.editedItem = this.shoppingService.getIngredient(id);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        });

      }
    )
  }



  onSubmit(form:NgForm){

    let newItem = form.value.name ;
    let newItemAmount = form.value.amount;
if(this.editMode){
  
this.shoppingService.updateIngredient(this.editItemIndex,new Ingredient(newItem,newItemAmount));
this.editMode=false;
form.reset({
  name:"",
  amount:""
})
console.log(this.shoppingService.shoppingList)
}else{
  this.shoppingService.addtoList(new Ingredient(newItem,newItemAmount));
  form.reset({
    name:"",
    amount:""
  })
}
  }

  onDelete(){
    this.shoppingService.removeFromList(this.editItemIndex);
    this.onClear();
  }

  onClear(){
    this.slForm.reset({
      name:"",
      amount:""
    });
    this.editMode=false;
  }

}
