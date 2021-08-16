import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-log-in',
  templateUrl: 'log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    private primengConfig:PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
