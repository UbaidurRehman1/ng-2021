import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    constructor(private http: HttpClient) {
    }

    private getAll_(): Observable<Person[]> {
        return this.http.get<Person[]>("assets/data/people.json");
    }

    getAll(): Observable<Person[]> {
        return this
            .getAll_()
            .pipe(
                map((person: Person[]) => person.map(this.returnPersonFromLocalStorageIfPresent))
            )
    }

    returnPersonFromLocalStorageIfPresent = (person: Person) => {
        return !!localStorage['person' + person.id] ? JSON.parse(localStorage['person' + person.id]) : person
    }

    search(q: string): Observable<Person[]> {
        if (!q || q === '*') {
            q = '';
        } else {
            q = q.toLowerCase();
        }

        return this.getAll().pipe(
            map((data: Person[]) => {
                return data.filter((item: Person) => {
                    return JSON.stringify(item).toLowerCase().includes(q)
                });
            })
        );
    }

    get(id: number): Observable<Person> {
        if (localStorage['person' + id]) {
            return of(JSON.parse(localStorage['person' + id]));
        }
        return this
            .getAll()
            .pipe(
                map((all: Person[]) => {
                    return all.find((e: Person) => e.id === id)!;
                })
            )
    }

    save(person: Person): void {
        localStorage['person' + person.id] = JSON.stringify(person);
    }

}

export class Address {
    street: string;
    city: string;
    state: string;
    zip: string;

    constructor(obj?: any) {
        this.street = obj?.street || null;
        this.city = obj?.city || null;
        this.state = obj?.state || null;
        this.zip = obj?.zip || null;
    }
}

export class Person {
    id: number;
    name: string;
    phone: string;
    address: Address;

    constructor(obj?: any) {
        this.id = obj?.id || null;
        this.name = obj?.name || null;
        this.phone = obj?.phone || null;
        this.address = obj?.address || null;
    }
}
