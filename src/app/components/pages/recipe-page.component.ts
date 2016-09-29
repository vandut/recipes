import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../dtos/recipe';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-page',
  templateUrl: 'recipe-page.component.html',
  styleUrls: ['recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {

  recipe: Recipe;

  public constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit() {
    this.activatedRoute.params.forEach(params => this.loadRecipe(params['id']));
  }

  private loadRecipe(recipeId: String) {
    this.recipe = this.recipeService.getRecipe(recipeId);
  }

}
