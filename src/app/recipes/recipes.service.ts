import {Recipe} from "./recipe.model";

export class RecipesService {
    private _recipes: Recipe[] = [
        new Recipe('Recipe1', 'A good one', 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=220&q=10'),
        new Recipe('Recipe2', 'A good two', 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=220&q=10'),
        new Recipe('Recipe2', 'A good three', 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=220&q=10')
    ];


    get recipes(): Recipe[] {
        return this._recipes.slice();
    }
}
