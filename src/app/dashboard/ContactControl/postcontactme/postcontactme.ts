// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-postcontactme',
//   imports: [],
//   templateUrl: './postcontactme.html',
//   styleUrl: './postcontactme.css'
// })
// export class Postcontactme {

// }

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-add-home',
//   imports: [],
//   templateUrl: './add-home.html',
//   styleUrl: './add-home.css'
// })
// export class AddHome {

// }


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


