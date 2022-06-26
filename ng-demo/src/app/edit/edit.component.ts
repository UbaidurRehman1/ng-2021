import {Component, OnDestroy, OnInit} from '@angular/core';
import {Person, SearchService} from "../shared";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

    person!: Person;
    sub!: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: SearchService) {
    }

    ngOnInit() {
        this.sub = this
            .route
            .params
            .subscribe(params => {
                const id = +params['id'];
                this
                    .service
                    .get(id)
                    .subscribe(person => {
                        if (person) {
                            this.person = person;
                        }  else {
                            this.gotoList();
                        }
                    });
                });
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    save(): void {
        this.service.save(this.person);
        this.gotoList();
    }

    cancel(): void {
        this
            .router
            .navigate(['/search'])
            .then(() => {
                console.log("navigated to search page")
            });
    }

    gotoList() {
        if (this.person) {
            this
                .router
                .navigate(['/search', {term: this.person.name} ])
                .then(() => console.log('navigated to search page with navigation extras ', this.person.name))
        } else {
            this
                .router
                .navigate(['/search'])
                .then(() => console.log('navigated to search page'))
        }
    }
}
