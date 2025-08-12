// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-postservices',
//   imports: [],
//   templateUrl: './postservices.html',
//   styleUrl: './postservices.css'
// })
// export class Postservices {

// }


// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-add-project',
// //   imports: [],
// //   templateUrl: './add-project.html',
// //   styleUrl: './add-project.css'
// // })
// // export class AddProject {

// // }
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-add-project',
//   imports: [ReactiveFormsModule],
//   templateUrl: './add-project.html',
//   styleUrl: './add-project.css'
// })
// export class AddProject {
//   projectForm: FormGroup;
//   selectedFile!: File;

//   constructor(private fb: FormBuilder, private http: HttpClient) {
//     this.projectForm = this.fb.group({
//       title: [''],
//       description: [''],
//       category: [''],
//       technologies: [''],
//       demoLink: [''],
//       githubLink: ['']
//     });
//   }

//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//   }

//   submitForm() {
//     const formData = new FormData();
//     formData.append('title', this.projectForm.get('title')?.value);
//     formData.append('description', this.projectForm.get('description')?.value);
//     formData.append('catagory', this.projectForm.get('category')?.value);
//     formData.append('technologies', this.projectForm.get('technologies')?.value);
//     formData.append('demoLink', this.projectForm.get('demoLink')?.value);
//     formData.append('githubLink', this.projectForm.get('githubLink')?.value);
//     if (this.selectedFile) {
//       formData.append('image', this.selectedFile);
//     }

//     this.http.post('http://localhost:3000/projects', formData)
//       .subscribe(res => {
//         console.log('Project added:', res);
//         this.projectForm.reset();
//       });
//   }
// }


import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServicesServices } from '../../../core/services/services.sevices';

@Component({
  selector: 'app-postservices',
  imports: [ReactiveFormsModule],
  templateUrl: './postservices.html',
  styleUrl: './postservices.css'
})
export class Postservices {
  constructor(private _services: ServicesServices) {}

  myForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    icon: new FormControl(''),
  });

//  onFileChange(event: any) {
//     const file = event.target.files[0];
//     this.myForm.patchValue({ icon: String });
//   }

onFileChange(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.myForm.patchValue({ icon: reader.result as string });
    };
    reader.readAsDataURL(file);
  }
}


  submit() {
    const formData = new FormData();
    formData.append('title', this.myForm.get('title')?.value);
    formData.append('description', this.myForm.get('description')?.value);
    formData.append('icon', this.myForm.get('icon')?.value);

    console.log(this.myForm.value);

    this._services.addservices(this.myForm.value).subscribe(res => {
      console.log('services added:', res);
      this.myForm.reset();
    });
  }



}

