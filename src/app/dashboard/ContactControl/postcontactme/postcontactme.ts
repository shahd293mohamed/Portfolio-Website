import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../../core/services/contact.services';
import e from 'cors';

@Component({
  selector: 'app-postcontactme',
  imports: [ReactiveFormsModule],
  templateUrl: './postcontactme.html',
  styleUrl: './postcontactme.css'
})
export class Postcontactme {
  constructor(private _contact: ContactService) {}

  myForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    linkedin: new FormControl(''),
    phone: new FormControl(''),
    github: new FormControl(''),
  });

  ngOnInit() {
    this.submit();
  }

  submit() {
    const formData = new FormData();
    formData.append('email', this.myForm.get('email')?.value);
    formData.append('linkedin', this.myForm.get('linkedin')?.value);
    formData.append('phone', this.myForm.get('phone')?.value);
    formData.append('github', this.myForm.get('github')?.value);

    console.log(this.myForm.value);

    this._contact.addContactInfo(this.myForm.value).subscribe(res => {
      console.log('services added:', res);
      this.myForm.reset();
    });
  }



}


