import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [new Recipe('Recipe1', 'A good one', 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg')];

    constructor() {
    }

    ngOnInit(): void {
    }

}
