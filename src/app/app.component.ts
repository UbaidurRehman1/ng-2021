import {Component} from '@angular/core';
import {RecipesService} from "./recipes/recipes.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [RecipesService]
})
export class AppComponent {
    title = 'course-project';
    selectedFeature: string = 'recipe';

    navigateTo(feature: string) {
        console.log('Event --------> ', feature);
        this.selectedFeature = feature;
    }
}
