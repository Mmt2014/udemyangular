import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        
    new Recipe (
        'Pancakes',
         'This is simply a test', 
         'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg',
         [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
         ]),
    new Recipe (
        'Icecream', 
    'This is simply a test', 
    'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894__340.jpg',
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
 getRecipe(index: number){
    return this.recipes[index];
 }

 addIngredientsToShoppingList(ingredients: Ingredient[]){
     this.slService.addIngredients(ingredients)
 }
}