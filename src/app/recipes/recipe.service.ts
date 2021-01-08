import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Channa Masala', 
  //     'Spicy and tastes good with pooris', 
  //     'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/05/chana-masala-recipe.jpg',

  //     [
  //       new Ingredient('Kabuli Channa', 1),
  //       new Ingredient('Channa Masala power', 1)
  //     ]),
  //   new Recipe(      
  //     'Palak Paneer',
  //     'Yummy with Chapathi',
  //     'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/palak-paneer-recipe.jpg',
  //     [
  //       new Ingredient('Panner', 2),
  //       new Ingredient('Palak', 1)
  //     ]),
  //   new Recipe(
  //     'Paneer Butter Masala',
  //      'Side dish for tandoori roti', 
  //      'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2.jpg',

  //       [
  //         new Ingredient('Panner', 1),
  //         new Ingredient('Butter', 2)
  //       ]),
  //   new Recipe(
  //     'Veg Kurma', 
  //     'Rice is good combination', 
  //     'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/02/veg-kurma.jpg',
  //       [
  //         new Ingredient('Vegetables', 2),
  //         new Ingredient('Masala Powder', 1)
  //       ])
  // ];




  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }



  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
