import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  path="recipe"
  title = 'recepie-app';

  navigateTo(path:string){
    this.path=path
   
  }
}
