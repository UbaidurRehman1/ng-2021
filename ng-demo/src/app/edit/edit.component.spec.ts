import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditComponent} from './edit.component';
import {Address, Person, SearchService} from "../shared";
import {MockActivatedRoute, MockRouter} from "../shared/search/mocks/routes";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {of} from "rxjs";
import {RouterTestingModule} from "@angular/router/testing";

describe('EditComponent', () => {

    let mockSearchService: SearchService;
    let mockActivatedRoute: MockActivatedRoute;
    let mockRouter: MockRouter;

    let component: EditComponent;
    let fixture: ComponentFixture<EditComponent>;

    beforeEach(() => {
        mockActivatedRoute = new MockActivatedRoute({id: 1});
        mockRouter = new MockRouter();

        TestBed.configureTestingModule({
            declarations: [EditComponent],
            providers: [
                {provide: ActivatedRoute, useValue: mockActivatedRoute},
                {provide: Router, useValue: mockRouter}
            ],
            imports: [FormsModule, HttpClientTestingModule]
        }).compileComponents();

        mockSearchService = TestBed.inject(SearchService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should fetch a single record', () => {
        const fixture = TestBed.createComponent(EditComponent);

        const person = new Person({id: 1, name: 'ubaid'});
        person.address = new Address({city: 'Jand'});

        // mock response
        spyOn(mockSearchService, 'get').and.returnValue(of(person));

        // initialize component
        fixture.detectChanges();

        // verify service was called
        expect(mockSearchService.get).toHaveBeenCalledWith(1);

        // verify data was set on component when initialized
        const editComponent = fixture.componentInstance;
        expect(editComponent.person.address.city).toBe('Jand');

        // verify HTML renders as expected
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('h3').innerHTML).toBe('ubaid');
    });
});
