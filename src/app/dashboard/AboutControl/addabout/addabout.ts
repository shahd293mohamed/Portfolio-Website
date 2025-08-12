import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AboutService } from '../../../core/services/about.services';

@Component({
  selector: 'app-addabout',
  imports: [ReactiveFormsModule],
  templateUrl: './addabout.html',
  styleUrl: './addabout.css'
})
export class Addabout {
  constructor(private _aboutS: AboutService) {}

  myForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
    bio: new FormControl(''),
    resumelink: new FormControl(''),
    facebook: new FormControl(''),
    twitter: new FormControl(''),
    instagram: new FormControl(''),
    github: new FormControl(''),
    linkedin: new FormControl(''),
    profileImage: new FormControl(null) // file
  });

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({ profileImage: file });
    }
  }

  submit() {
    let formData = new FormData();

    // Append all text fields
    formData.append('name', this.myForm.get('name')?.value);
    formData.append('title', this.myForm.get('title')?.value);
    formData.append('bio', this.myForm.get('bio')?.value);
    formData.append('resumelink', this.myForm.get('resumelink')?.value);
    formData.append('facebook', this.myForm.get('facebook')?.value);
    formData.append('twitter', this.myForm.get('twitter')?.value);
    formData.append('instagram', this.myForm.get('instagram')?.value);
    formData.append('github', this.myForm.get('github')?.value);
    formData.append('linkedin', this.myForm.get('linkedin')?.value);

    // Append file if exists
    const file = this.myForm.get('profileImage')?.value;
    if (file) {
      formData.append('profileImage', file);
    }

    // Call service — if you always create or update, decide here
    this._aboutS.createAbout(formData).subscribe(res => {
      console.log('About saved:', res);
    });
  }
}

