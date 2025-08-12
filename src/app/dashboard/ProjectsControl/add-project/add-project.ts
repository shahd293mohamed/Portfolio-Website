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
import { ProjectsService } from '../../../core/services/projects.services';

@Component({
  selector: 'app-add-project',
  // standalone: true, // if you want it standalone
  imports: [ReactiveFormsModule],
  templateUrl: './add-project.html',
  styleUrl: './add-project.css'
})
export class AddProject {
  constructor(private _projectsService: ProjectsService) {}

  myForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    catagory: new FormControl(''),
    technologies: new FormControl(''), 
    demoLink: new FormControl(''),
    githubLink: new FormControl(''),
    image: new FormControl(null) 
  });

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        image: file
      });
    }
  }

  submit() {
    const formData = new FormData();
    formData.append('title', this.myForm.get('title')?.value);
    formData.append('description', this.myForm.get('description')?.value);
    formData.append('catagory', this.myForm.get('catagory')?.value);
    formData.append('technologies', this.myForm.get('technologies')?.value);
    formData.append('demoLink', this.myForm.get('demoLink')?.value);
    formData.append('githubLink', this.myForm.get('githubLink')?.value);
    formData.append('image', this.myForm.get('image')?.value);

    console.log(this.myForm.value);

    this._projectsService.addProject(formData).subscribe(res => {
      console.log('Project Added:', res);
      this.myForm.reset();
    });
  }
}

