import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        
    new Recipe (
        'A Test Recipe',
         'This is simply a test', 
         'https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221__340.jpg',
         [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
         ]),
    new Recipe (
        'Another Recipe', 
    'This is simply a test', 
    'https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221__340.jpg',
    [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
    ])

];
constructor(private slService: ShoppingListService){

}
getRecipes(){
    return this.recipes.slice();//we only get copies by slice
}
 addIngredientsToShoppingList(ingredients: Ingredient[]){
     this.slService.addIngredients(ingredients)
 }
}