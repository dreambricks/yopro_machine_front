import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.css']
})
export class CardDashboardComponent implements OnInit {

  dataTotal: { status: string, count: number }[] = [];
  Total = 'Total';


  lastUpdateTotal: any;



  constructor(private backendService: BackendService){ }

  ngOnInit() {
  
    this.backendService.getStatusCountTotal().subscribe(response => {      
      this.dataTotal = response;
    });


    this.backendService.getLastUpdate().subscribe(response => {    
      this.lastUpdateTotal = response;
    });


  }

}
