import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from '../dtos/recipe';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SimpleHttpRecipeService implements RecipeService {

  constructor() {
  }

  listRecipes(): Promise<String[]> {
    return Promise.reject("not implemented");
  }

  getRecipe(recipeId: String): Promise<Recipe> {
    return Promise.reject("not implemented");
  }

  addRecipe(recipe: Recipe): Promise<void> {
    return Promise.reject("not supported");
  }

  removeRecipe(recipeId: String): Promise<boolean> {
    return Promise.reject("not supported");
  }

}
