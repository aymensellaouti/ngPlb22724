import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent {
  processForm(formulaire: NgForm) {
    console.log(formulaire);
  }

}
