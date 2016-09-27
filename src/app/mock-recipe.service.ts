import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';
import LinkedDictionary from 'typescript-collections/dist/lib/LinkedDictionary';

@Injectable()
export class MockRecipeService implements RecipeService {

  private recipes: LinkedDictionary<String, Recipe> = new LinkedDictionary<String, Recipe>();

  constructor() {
    this.addRecipe({
      id: 'wrG2k',
      title: 'Pork in vindaloo sauce',
      link: 'https://www.youtube.com/watch?v=dM8StL3nHi0',
      portions: 3,
      ingredients: [
        {
          name: 'Dried kashmiri chillies',
          amount: 8,
          unit: 'piece'
        },
        {
          name: 'Black pepper',
          amount: 4,
          unit: 'seed'
        },
        {
          name: 'Pork shoulder',
          amount: 1,
          unit: 'kg'
        }
      ],
      instructions: [
        'Cut meat into 5cm cubes',
        'Marinate overnight (preferably 24h)'
      ]
    });
    this.addRecipe({
      id: 'zkaJr',
      title: 'Recipe1',
      link: 'https://www.youtube.com/watch?v=ABCDZ',
      portions: 3,
      ingredients: [
        {
          name: 'XYZ',
          amount: 4,
          unit: 'cup'
        },
        {
          name: 'Water',
          amount: 5.250,
          unit: 'ml'
        },
        {
          name: 'Bread',
          amount: 1,
          unit: 'slice'
        }
      ],
      instructions: [
        'Abra',
        'Kadabra'
      ]
    });
  }

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
