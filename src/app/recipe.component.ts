import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { Recipe } from './recipe';
import { Objects } from './helpers/objects';

@Component({
  selector: 'app-recipe',
  templateUrl: 'recipe.component.html',
  styleUrls: ['recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input()
  private recipe: Recipe;

  // noinspection JSUnusedGlobalSymbols
  public ngOnInit(): void {
    Objects.requireNonNull(this.recipe, "Missing recipe");
  }

}
