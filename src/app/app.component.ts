import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data/data';
import { TableData } from '../data/table';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, TableComponent],
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
}
