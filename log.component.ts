import { Component, OnInit } from '@angular/core';


import { LogService } from '../../services/log.service';

import { Log } from '../../models/Log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  id: string;
  text: string;
  date: any;


  constructor(private logService: LogService) { }

  ngOnInit() {
    // subscribe to the selectLog observable
    this.logService.selectedLog.subscribe(log => {
      if (log.id !== null) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;

      }
    });
  }

}
