import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Row } from '../../../data/table';

export type FormData = {
  [id: string]: string | number;
};

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Output() formData = new EventEmitter<FormData| Row>()

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
    if(this.patientData.valid && this.patientData.value[7]){
      const translatedData = {...this.patientData.value, [3]:Number(this.patientData.value[3]), [6]:Number(this.patientData.value[6]), [7]: this.patientData.value[7].replace("T"," "), [4]: this.patientData.value[4]?.toString()}
      this.formData.emit(translatedData as Row)
    }
    this.patientData.reset()
  }
}
