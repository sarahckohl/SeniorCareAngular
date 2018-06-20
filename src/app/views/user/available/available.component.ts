import { Component, OnInit } from '@angular/core';
import { AvailableService } from './available.service';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})
export class AvailableComponent implements OnInit {

  patients: any[];
  constructor(private atService: AvailableService) { }

  ngOnInit() {
    this.atService.getPatients().subscribe((value) => {
      console.log(value[0].name);
            this.patients = value;
  });
}
}