// dropdown.component.ts 
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {DropdownOption} from "./models/DropdownOption";

@Component({
    selector: 'dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
    @Output() dropdownSelected: EventEmitter<string> = new EventEmitter<string>();
    @Input() dropdownItems: DropdownOption[] = DropdownOption.getOptions();
    @Input() title: string;
    @Input() startingSelected: DropdownOption;
    constructor() {
        
    }

    emitDropdownSelected(item: string) {
        this.dropdownSelected.emit(item);
    }
}
