import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

    recipes: Recipe[] | undefined;

    constructor(private recipeService: RecipesService) {
    }

    ngOnInit(): void {
        this.recipes = this.recipeService.recipes;
    }

    selectRecipe(recipe: Recipe) {
        this.selectedRecipe.emit(recipe);
    }
}
