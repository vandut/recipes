import { Injectable } from '@angular/core';
import { InMemoryRecipeService } from './in-memory-recipe.service';

@Injectable()
export class PopulatedInMemoryRecipeService extends InMemoryRecipeService {

  constructor() {
    super();
    this.addRecipe({
      id: 'wrG2k',
      title: 'Pork in vindaloo sauce',
      link: 'https://www.youtube.com/watch?v=dM8StL3nHi0',
      portions: 3,
      ingredients: [
        {
          name: 'Dried kashmiri chillies',
          amount: 8,
          unit: 'piece'
        },
        {
          name: 'Black pepper',
          amount: 4,
          unit: 'seed'
        },
        {
          name: 'Pork shoulder',
          amount: 1,
          unit: 'kg'
        }
      ],
      instructions: [
        'Cut meat into 5cm cubes',
        'Marinate overnight (preferably 24h)'
      ]
    });
    this.addRecipe({
      id: 'zkaJr',
      title: 'Recipe1',
      link: 'https://www.youtube.com/watch?v=ABCDZ',
      portions: 3,
      ingredients: [
        {
          name: 'XYZ',
          amount: 4,
          unit: 'cup'
        },
        {
          name: 'Water',
          amount: 5.250,
          unit: 'ml'
        },
        {
          name: 'Bread',
          amount: 1,
          unit: 'slice'
        }
      ],
      instructions: [
        'Abra',
        'Kadabra'
      ]
    });
  }

}
