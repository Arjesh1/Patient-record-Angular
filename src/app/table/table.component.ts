import { NgFor } from '@angular/common';
import { Component, Input  } from '@angular/core';
import { TableData } from '../../data/table';

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

}
