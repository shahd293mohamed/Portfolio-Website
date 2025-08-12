import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HomeServices } from '../../../core/services/home.services';

@Component({
  selector: 'app-add-home',
  imports: [ReactiveFormsModule],
  templateUrl: './add-home.html',
  styleUrl: './add-home.css'
})
export class AddHome {
  constructor(private _home: HomeServices) {}

  myForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    bio: new FormControl(''),
    image: new FormControl(null),
  });

 onFileChange(event: any) {
    const file = event.target.files[0];
    this.myForm.patchValue({ image: file });
  }

// onFileChange(event: any) {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = () => {
//       this.myForm.patchValue({ icon: reader.result as string });
//     };
//     reader.readAsDataURL(file);
//   }
// }


  submit() {
    const formData = new FormData();
    formData.append('name', this.myForm.get('name')?.value);
    formData.append('bio', this.myForm.get('bio')?.value);
    formData.append('image', this.myForm.get('image')?.value);

    console.log(this.myForm.value);

    this._home.addHome(this.myForm.value).subscribe(res => {
      console.log('services added:', res);
      this.myForm.reset();
    });
  }



}


