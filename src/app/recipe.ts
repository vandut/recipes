import { Ingredient } from './ingredient';

export class Recipe {
  uuid: String;
  title: String;
  link: String;
  portions: Number;
  ingredients: Ingredient[];
  instructions: String[];
}
