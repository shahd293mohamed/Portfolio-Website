import { Component } from '@angular/core';
import { Iservices } from '../core/model';
import { ServicesServices } from '../core/services/services.sevices';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  imports: [CommonModule],
  templateUrl: './work.html',
  styleUrl: './work.css'
})
export class Work {
  servicesdata: Iservices[] = []
  constructor(private _services:ServicesServices){}

  async ngOnInit(){
    await this.getServices();
  }
  getServices() {
    this._services.getservices().subscribe(res => {
      this.servicesdata = res;
    });
  }

}
