import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe.component';
import { RecipeService } from './recipe.service';
import { MockRecipeService } from './mock-recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: RecipeService, useClass: MockRecipeService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
