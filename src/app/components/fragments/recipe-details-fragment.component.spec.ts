/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { RecipeDetailsFragmentComponent } from './recipe-details-fragment.component';

describe('Component: RecipeDetailsFragment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDetailsFragmentComponent]
    });
  });

  it('should create an instance', () => {
    let fixture = TestBed.createComponent(RecipeDetailsFragmentComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
