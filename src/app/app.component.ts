import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'course-project';
    selectedFeature: string = 'recipe';

    navigateTo(feature: string) {
        console.log('Event --------> ', feature);
        this.selectedFeature = feature;
    }
}
