import { NgFor } from '@angular/common';
import { Component, Input, SimpleChanges  } from '@angular/core';
import { Header, TableData } from '../../data/table';

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
  headers: Header[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tableData'] && this.tableData) {
      this.headers = Object.values(this.tableData.header);
    }
  }

}
