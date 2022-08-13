import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id!:number;
  editMode:boolean= false; 
  recipeEditForm!: FormGroup;
  recipe!:Recipe;
  imageLink!:string;

  constructor(private route:ActivatedRoute,private recipeService: RecipeService,private router:Router) { }

  ngOnInit(){



    this.route.params.subscribe((params:Params)=>{
      this.id=+params["id"]
      this.editMode=params["id"]!=null;
      this.initForm()
    })


  };

  onDeleteIngredient(i:number){
    (<FormArray>this.recipeEditForm.get('ingredients')).removeAt(i)
  }

  onAddIngredient(){
    (<FormArray>this.recipeEditForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }


  onSubmit(){
    console.log(this.recipeEditForm.value)
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeEditForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeEditForm.value);
    }
    this.onCancel();
    }

    onCancel(){
      this.router.navigate(['../'], {relativeTo: this.route});

    }




  private initForm(){

    let recipeName="";
    let recipeDescription="";
    let recipeImage ="";
    let recipeIngredients:any=new FormArray([]);

    if(this.editMode){
      this.recipe=this.recipeService.getRecipe(this.id)
      console.log(this.recipe)
      
        recipeName=this.recipe.name;
        recipeDescription=this.recipe.description;
        recipeImage =this.recipe.imagePath;
        this.imageLink=this.recipe.imagePath;

        if (this.recipe['ingredients']) {
          for (let ingredient of this.recipe.ingredients) {
            recipeIngredients.push(
              new FormGroup({
                'name': new FormControl(ingredient.name, Validators.required),
                'amount': new FormControl(ingredient.amount, [
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
              })
            );
          }
        }    
  }


      this.recipeEditForm = new FormGroup({
        "name":new FormControl(recipeName,Validators.required),
        "imagePath": new FormControl(recipeImage,Validators.required),
        "description": new FormControl(recipeDescription,Validators.required),
        "ingredients" : recipeIngredients
      })

  }
 





    

}
