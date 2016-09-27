import { Recipe } from './recipe';

export abstract class RecipeService {

  listRecipes: () => String[];

  getRecipe: (recipeId: String) => Recipe;

  addRecipe: (recipe: Recipe) => void;

  removeRecipe: (recipeId: String) => boolean;

}
