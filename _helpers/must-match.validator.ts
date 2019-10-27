import { FormGroup } from "@angular/forms";

// custom validator to check whether the email is unique
export function MustMatch(controlName: string, usedEmails: any) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];

    if (control.errors && !control.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (usedEmails.includes(control.value)) {
      control.setErrors({ mustMatch: true });
    } else {
      control.setErrors(null);
    }
  };
}
