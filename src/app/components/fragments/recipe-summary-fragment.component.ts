import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../dtos/recipe';
import { Input } from '@angular/core/src/metadata/directives';
import { Objects } from '../../helpers/objects';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: 'recipe-summary-fragment.component.html',
  styleUrls: ['recipe-summary-fragment.component.css']
})
export class RecipeSummaryFragmentComponent implements OnInit {

  @Input()
  private recipe: Recipe;

  // noinspection JSUnusedGlobalSymbols
  public ngOnInit(): void {
    Objects.requireNonNull(this.recipe, 'Missing recipe');
  }

}
