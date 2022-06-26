import {Component, OnDestroy, OnInit} from '@angular/core';
import {Person, SearchService} from '../shared';
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

    sub!: Subscription;
    query!: string;
    searchResults: Person[] = [];

    constructor(private searchService: SearchService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.sub = this
            .route
            .params
            .subscribe(params => {
                if (params['term']) {
                    this.query = decodeURIComponent(params['term']);
                    this.search();
                }
        })
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    search(): void {
        this
            .searchService
            .search(this.query)
            .subscribe({
                next:(data: Person[]) => {this.searchResults = data},
                error: (e: any) => console.log(e)
            })
    }
}
