import { Injectable } from '@angular/core';
import { Recipe } from '../dtos/recipe';
import { RecipeService } from './recipe.service';
import LinkedDictionary from 'typescript-collections/dist/lib/LinkedDictionary';

@Injectable()
export class InMemoryRecipeService implements RecipeService {

  private recipes: LinkedDictionary<String, Recipe> = new LinkedDictionary<String, Recipe>();

  public listRecipes(): Promise<String[]> {
    return Promise.resolve(this.recipes.keys());
  }

  public getRecipe(recipeId: String): Promise<Recipe> {
    return Promise.resolve(this.recipes.getValue(recipeId));
  }

  public addRecipe(recipe: Recipe): Promise<void> {
    this.recipes.setValue(recipe.id, recipe);
    return Promise.resolve();
  }

  public removeRecipe(recipeId: String): Promise<boolean> {
    return Promise.resolve(this.recipes.remove(recipeId) != null);
  }

}
