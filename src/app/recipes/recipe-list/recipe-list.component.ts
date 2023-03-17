import { Component, OnInit ,Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
        
        new Recipe ('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221__340.jpg'),
        new Recipe ('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221__340.jpg')

  ]

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
       this.recipeWasSelected.emit(recipe);
  }

}
