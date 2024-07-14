import { NgFor  } from '@angular/common';
import { Component, Input, SimpleChanges  } from '@angular/core';
import { Row, TableData } from '../../data/table';

type NewHeaderType = { name: string } & (
  | {
      uiType: 'text' | 'input' | 'dateTime' | 'dropdown';
      format?: 'dd/MM/YYYY' | 'dd/MM/YYYY hh:mm';
      options?: {
        value: number;
        displayText: string;
      }[];
    }
);

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() title?: string;
  @Input() tableData?: TableData;
  headers: NewHeaderType[] = [];
  eachRow: Row[] = []
  loading:boolean= true

  //detecting changes and getting header data in array from tableData
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tableData'] && this.tableData) {
      this.loading = false
      this.headers = Object.values(this.tableData.header);
    }
  }

  // converting objects to array
  valuesInRows(rowDataObj:Row):any{
    return Object.values(rowDataObj)
  }

}
