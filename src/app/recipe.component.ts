import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: 'recipe.component.html',
  styleUrls: ['recipe.component.css']
})
export class RecipeComponent {

  private recipe = {
    uuid: '7bc8aee8-fdca-4c90-b944-5682801bde0b',
    title: 'Pork in vindaloo sauce',
    link: 'https://www.youtube.com/watch?v=dM8StL3nHi0',
    portions: '3',
    ingredients: [
      {
        name: 'Dried kashmiri chillies',
        amount: '8',
        unit: 'piece'
      },
      {
        name: 'Black pepper',
        amount: '4',
        unit: 'seed'
      },
      {
        name: 'Pork shoulder',
        amount: '1',
        unit: 'kg'
      },
    ],
    instructions: [
      'Cut meat into 5cm cubes',
      'Marinate overnight (preferably 24h)'
    ]
  };

}
