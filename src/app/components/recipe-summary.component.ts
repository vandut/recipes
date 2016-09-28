import { Component, OnInit } from '@angular/core';
import { Recipe } from '../dtos/recipe';
import { Input } from '@angular/core/src/metadata/directives';
import { Objects } from '../helpers/objects';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: 'recipe-summary.component.html',
  styleUrls: ['recipe-summary.component.css']
})
export class RecipeSummaryComponent implements OnInit {

  @Input()
  private recipe: Recipe;

  // noinspection JSUnusedGlobalSymbols
  public ngOnInit(): void {
    Objects.requireNonNull(this.recipe, 'Missing recipe');
  }

}
