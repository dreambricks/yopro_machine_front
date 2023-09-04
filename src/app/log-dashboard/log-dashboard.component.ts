import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from '../backend.service';
import { MatPaginator }  from '@angular/material/paginator'
import { MatSort }  from '@angular/material/sort'
import { MatTableDataSource }  from '@angular/material/table'



@Component({
  selector: 'app-log-dashboard',
  templateUrl: './log-dashboard.component.html',
  styleUrls: ['./log-dashboard.component.css']
})
export class LogDashboardComponent implements OnInit {

  displayedColumns: string[] = ['timePlayed', 'uploadedData', 'status'];
  dataSource!: MatTableDataSource<DataLog>; 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getDadosPaginados(0, 10).subscribe(data => {
      console.log(data);
      
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

export interface DataLog {
  timePlayed: string;
  status: string;
}
