import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Row } from '../../../data/table';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Output() formData = new EventEmitter<any>()

  patientData = new FormGroup({
    1: new FormControl(''),
    2: new FormControl(''),
    3: new FormControl(),
    4: new FormControl(''),
    5: new FormControl(''),
    6: new FormControl(),
    7: new FormControl(''),
    8: new FormControl(''),
  });

  handleSubmit() {
    this.formData.emit(this.patientData.value)
  }

}
