/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { RecipeComponent } from './recipe.component';

describe('Component: Recipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeComponent]
    });
  });

  it('should create an instance', () => {
    let fixture = TestBed.createComponent(RecipeComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
