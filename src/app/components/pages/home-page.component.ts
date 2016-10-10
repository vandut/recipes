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
    this.recipeService.listRecipes().then(recipeIds => {
      for (let recipeId of recipeIds) {
        this.recipeService.getRecipe(recipeId).then(recipe => this.recipes.push(recipe));
      }
    });
  }

}
