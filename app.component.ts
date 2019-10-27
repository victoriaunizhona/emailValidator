import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from "./_helpers/must-match.validator";

@Component({
  selector: "app",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  alreadyUsed = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]]
      },
      {
        validator: MustMatch("email", this.alreadyUsed)
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    console.log(this.registerForm.controls);
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.alreadyUsed.push(this.registerForm.value.email);
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value));
    this.registerForm.reset();
  }
}
