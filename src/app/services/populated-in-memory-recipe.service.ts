import { Injectable } from '@angular/core';
import { InMemoryRecipeService } from './in-memory-recipe.service';

var recipe1 = require('../../assets/recipes/wrG2k.json');
var recipe2 = require('../../assets/recipes/zkaJr.json');

@Injectable()
export class PopulatedInMemoryRecipeService extends InMemoryRecipeService {

  constructor() {
    super();
    this.addRecipe(recipe1);
    this.addRecipe(recipe2);
  }

}
