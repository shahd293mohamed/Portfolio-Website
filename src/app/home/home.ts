import { Component } from '@angular/core';
import { Ihome } from '../core/model';
import { HttpClient } from '@angular/common/http';
import { HomeServices } from '../core/services/home.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  homedata:Ihome[]=[]
  constructor(private _home:HomeServices) { }

  async ngOnInit() {
    await this.getHome();
  }

 getHome() {
  this._home.getHome().subscribe(data => {
    this.homedata = data.map(item => ({
      ...item,
      profileImage: (typeof item.image === 'string' ? item.image.replace(/^images[\\/]/, '') : '')
    }));
    console.log('Cleaned about data:', this.homedata);
  });
}

}
