import { Injectable } from '@angular/core';
import { Recipe } from '../dtos/recipe';
import { RecipeService } from './recipe.service';
import LinkedDictionary from 'typescript-collections/dist/lib/LinkedDictionary';

@Injectable()
export class InMemoryRecipeService implements RecipeService {

  private recipes: LinkedDictionary<String, Recipe> = new LinkedDictionary<String, Recipe>();

  public listRecipes(): String[] {
    return this.recipes.keys();
  }

  public getRecipe(recipeId: String): Recipe {
    return this.recipes.getValue(recipeId);
  }

  public addRecipe(recipe: Recipe): void {
    this.recipes.setValue(recipe.id, recipe);
  }

  public removeRecipe(recipeId: String): boolean {
    return this.recipes.remove(recipeId) != null;
  }

}
