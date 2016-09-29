import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../dtos/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.css']
})
export class HomePageComponent implements OnInit {

  recipes: Recipe[] = [];

  public constructor(private recipeService: RecipeService) {
  }

  // noinspection JSUnusedGlobalSymbols
  ngOnInit() {
    for (let recipeId of this.recipeService.listRecipes()) {
      this.recipes.push(this.recipeService.getRecipe(recipeId));
    }
  }

}
