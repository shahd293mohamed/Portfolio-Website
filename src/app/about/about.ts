import { Component, OnInit } from '@angular/core';
import { AboutService } from '../core/services/about.services';
import { Iabout } from '../core/model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About{
  aboutdata: Iabout[] = [];
  constructor(private _about:AboutService){}

   async ngOnInit(){
    await this.getAbout();
  }
getAbout() {
  this._about.getAbout().subscribe(data => {
    this.aboutdata = data.map(item => ({
      ...item,
      profileImage: (typeof item.profileImage === 'string' ? item.profileImage.replace(/^images[\\/]/, '') : '')
    }));
    console.log('Cleaned about data:', this.aboutdata);
  });
}


}
