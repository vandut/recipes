import { Ingredient } from './ingredient';

export class Recipe {
  id: String;
  title: String;
  link: String;
  portions: Number;
  ingredients: Ingredient[];
  instructions: String[];
}
