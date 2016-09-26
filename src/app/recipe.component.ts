import { Component } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: 'recipe.component.html',
  styleUrls: ['recipe.component.css']
})
export class RecipeComponent {

  private recipe: Recipe;

  constructor(private recipeService: RecipeService) {
    this.recipe = this.recipeService.getRecipe('7bc8aee8-fdca-4c90-b944-5682801bde0b');
  }

}
