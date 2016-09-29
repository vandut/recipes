import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { Recipe } from '../../dtos/recipe';
import { Objects } from '../../helpers/objects';

@Component({
  selector: 'app-recipe-details',
  templateUrl: 'recipe-details-fragment.component.html',
  styleUrls: ['recipe-details-fragment.component.css']
})
export class RecipeDetailsFragmentComponent implements OnInit {

  @Input()
  private recipe: Recipe;

  // noinspection JSUnusedGlobalSymbols
  public ngOnInit(): void {
    Objects.requireNonNull(this.recipe, 'Missing recipe');
  }

}
