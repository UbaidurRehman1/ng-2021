import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

    @ViewChild('nameInput') nameInput : ElementRef | undefined;
    @ViewChild('amountInput') amountInput : ElementRef | undefined;

    @Output() onIngredientAdded : EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onAddIngredient() {
        const name = this.nameInput?.nativeElement.value;
        const amount = this.amountInput?.nativeElement.value;
        this.onIngredientAdded.emit(new Ingredient(name, amount));
    }
}
