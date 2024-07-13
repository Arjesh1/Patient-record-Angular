import { Injectable } from '@angular/core';
import { TableData, tableData } from './table';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor() {}

  async getTableData(): Promise<TableData> {
    return tableData;
  }
}
