import { Component } from '@angular/core';
import { Icontactus } from '../../../core/model';
import { ContactService } from '../../../core/services/contact.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-contactus',
  imports: [CommonModule],
  templateUrl: './get-contactus.html',
  styleUrl: './get-contactus.css'
})
export class GetContactus {
  contact: Icontactus[] = [];
    isLoading = true;
    errorMessage = '';
  
    constructor(private _contact: ContactService) {}
  
    ngOnInit() {
      this.loadProjects();
    }
  
    loadProjects() {
      this._contact.getMessage().subscribe({
        next: (res) => {
          this.contact = res;
          this.isLoading = false;
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = 'Failed to load home';
          this.isLoading = false;
        }
      });
    }

}
