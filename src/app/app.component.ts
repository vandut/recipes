import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Recipes';
  recipes: Recipe[] = [];

  public constructor(private recipeService: RecipeService) {
  }

  // noinspection JSUnusedGlobalSymbols
  public ngOnInit(): void {
    for (let recipeId of this.recipeService.listRecipes()) {
      this.recipes.push(this.recipeService.getRecipe(recipeId));
    }
  }

}
