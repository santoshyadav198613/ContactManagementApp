import { AbstractControl } from '@angular/forms';

export class CustomValidator {
    static cardValidator(control: AbstractControl) {
        if (control.value !== undefined && control.value !== null) {
            if (control.value.toString().length < 16 || control.value.toString().length > 19) {
                return { cardValid: false }
            }
            else {
                return null;
            }
        }
    }

    static monthValidator (control: AbstractControl) {
        if (control.value !== undefined && control.value !== null) {
            if (control.value < 1  || control.value  > 12) {
                return { invalidMonth: false }
            }
            else {
                return null;
            }
        }
    }
}