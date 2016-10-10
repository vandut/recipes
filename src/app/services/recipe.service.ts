import { Recipe } from '../dtos/recipe';

export abstract class RecipeService {

  listRecipes: () => Promise<String[]>;

  getRecipe: (recipeId: String) => Promise<Recipe>;

  addRecipe: (recipe: Recipe) => Promise<void>;

  removeRecipe: (recipeId: String) => Promise<boolean>;

}
