import { Component, OnInit, AfterViewInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  date: string;
  client: string;
  Line: number;
  Rate: string;
  balance: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {client: 'omar', date: '22-15-20', Line: 1.0079, Rate: 'Effective', balance: 500},
  {client: 'omar', date: '22-15-20', Line: 4.0026, Rate: 'Effective', balance: 500},
  {client: 'omar', date: '22-15-20', Line: 6.941, Rate: 'Effective', balance: 500},
  {client: 'omar', date: '22-15-20', Line: 9.0122, Rate: 'Effective', balance: 500},
  {client: 'omar', date: '22-15-20', Line: 10.811, Rate: 'Effective', balance: 500}
];

@Component({
  selector: 'app-visual-clients',
  templateUrl: './visual-clients.component.html',
  styleUrls: ['./visual-clients.component.css']
})
export class VisualClientsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['client', 'date', 'Line', 'Rate', 'balance'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }

  // tslint:disable-next-line:typedef
  applyFilter($event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
