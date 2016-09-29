import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../dtos/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: 'recipe-page.component.html',
  styleUrls: ['recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {

  recipe: Recipe;

  public constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe('wrG2k');
  }

}
