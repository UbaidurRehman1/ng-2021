import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective {

    @HostBinding('class.open') isOpen: boolean = false;

    constructor() {
    }

    @HostListener('click') toggleDropDown() {
        this.isOpen = !this.isOpen;
    }
}
