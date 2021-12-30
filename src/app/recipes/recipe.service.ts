import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://github.com/thereallucas98.png'),
    new Recipe('A Second Recipe', 'This is a second test', 'https://images.unsplash.com/photo-1636844799799-fb41e4dc62ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=773&q=80'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}