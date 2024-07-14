import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data/data';
import { Row, TableData } from '../data/table';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, TableComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Patient Record';
  tableData: TableData | undefined;
  constructor(private data: DataService) {
    this.getData();
  }

  async getData() {
    this.tableData = await this.data.getTableData();
    return this.tableData;
  }

  updateData(patientData:Row){
      this.tableData?.rows.push(patientData)
  }
}
