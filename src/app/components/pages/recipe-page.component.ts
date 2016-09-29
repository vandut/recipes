import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../dtos/recipe';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-page',
  templateUrl: 'recipe-page.component.html',
  styleUrls: ['recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {

  recipe: Recipe;

  public constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.recipe = this.recipeService.getRecipe(params['id']);
    });
  }

}
