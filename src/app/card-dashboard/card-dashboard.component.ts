import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.css']
})
export class CardDashboardComponent implements OnInit {

  data1: { status: string, count: number }[] = [];
  Tablet_1 = 'Tablet_1';

  data2: { status: string, count: number }[] = [];
  Tablet_2 = 'Tablet_2';

  
  data3: { status: string, count: number }[] = [];
  Tablet_3 = 'Tablet_3';

  
  data4: { status: string, count: number }[] = [];
  Tablet_4 = 'Tablet_4';

  
  data5: { status: string, count: number }[] = [];
  Tablet_5 = 'Tablet_5';

  
  data6: { status: string, count: number }[] = [];
  Tablet_6 = 'Tablet_6';

  
  data7: { status: string, count: number }[] = [];
  Tablet_7 = 'Tablet_7';

  
  data8: { status: string, count: number }[] = [];
  Tablet_8 = 'Tablet_8';

  
  data9: { status: string, count: number }[] = [];
  Tablet_9 = 'Tablet_9';

  
  data10: { status: string, count: number }[] = [];
  Tablet_10 = 'Tablet_10';

  dataTotal: { status: string, count: number }[] = [];
  Total = 'Total';


  lastUpdateTotal: any;

  lastUpdate1:any;
  lastUpdate2:any;
  lastUpdate3:any;
  lastUpdate4:any;
  lastUpdate5:any;
  lastUpdate6:any;
  lastUpdate7:any;
  lastUpdate8:any;
  lastUpdate9:any;
  lastUpdate10:any;
  lastUpdate0:any;
  
  


  constructor(private backendService: BackendService){ }

  ngOnInit() {
    this.backendService.getStatusCountByBarName(this.Tablet_1).subscribe(response => {      
      this.data1 = response;
    });

    this.backendService.getStatusCountByBarName(this.Tablet_2).subscribe(response => {      
      this.data2 = response;
    });

    this.backendService.getStatusCountByBarName(this.Tablet_3).subscribe(response => {      
      this.data3 = response;
    });

    this.backendService.getStatusCountByBarName(this.Tablet_4).subscribe(response => {      
      this.data4 = response;
    });

    this.backendService.getStatusCountByBarName(this.Tablet_5).subscribe(response => {      
      this.data5 = response;
    });

    this.backendService.getStatusCountByBarName(this.Tablet_6).subscribe(response => {      
      this.data6 = response;
    });

    this.backendService.getStatusCountByBarName(this.Tablet_7).subscribe(response => {      
      this.data7 = response;
    });

    this.backendService.getStatusCountByBarName(this.Tablet_8).subscribe(response => {      
      this.data8 = response;
    });

    this.backendService.getStatusCountByBarName(this.Tablet_9).subscribe(response => {      
      this.data9 = response;
    });

    this.backendService.getStatusCountByBarName(this.Tablet_10).subscribe(response => {      
      this.data10 = response;
    });

    this.backendService.getStatusCountTotal().subscribe(response => {      
      this.dataTotal = response;
    });



    this.backendService.getLastUpdate().subscribe(response => {    
      this.lastUpdateTotal = response;
    });



    this.backendService.getLastUpdateByBarName("Tablet_0").subscribe(response => {    
      this.lastUpdate0 = response;
    });

    this.backendService.getLastUpdateByBarName("Tablet_1").subscribe(response => {    
      this.lastUpdate1 = response;
    });

    this.backendService.getLastUpdateByBarName("Tablet_2").subscribe(response => {    
      this.lastUpdate2 = response;
    });

    this.backendService.getLastUpdateByBarName("Tablet_3").subscribe(response => {    
      this.lastUpdate3 = response;
    });

    this.backendService.getLastUpdateByBarName("Tablet_4").subscribe(response => {    
      this.lastUpdate4 = response;
    });

    this.backendService.getLastUpdateByBarName("Tablet_5").subscribe(response => {    
      this.lastUpdate5 = response;
    });

    this.backendService.getLastUpdateByBarName("Tablet_6").subscribe(response => {    
      this.lastUpdate6 = response;
    });

    this.backendService.getLastUpdateByBarName("Tablet_7").subscribe(response => {    
      this.lastUpdate7 = response;
    });

    this.backendService.getLastUpdateByBarName("Tablet_8").subscribe(response => {    
      this.lastUpdate8 = response;
    });

    this.backendService.getLastUpdateByBarName("Tablet_9").subscribe(response => {    
      this.lastUpdate9 = response;
    });

    this.backendService.getLastUpdateByBarName("Tablet_10").subscribe(response => {    
      this.lastUpdate10 = response;
    });

  }

}
