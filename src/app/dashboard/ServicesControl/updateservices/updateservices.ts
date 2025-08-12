import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesServices } from '../../../core/services/services.sevices';
import { Iservices } from '../../../core/model';

@Component({
  selector: 'app-updateservices',
  imports: [ReactiveFormsModule],
  templateUrl: './updateservices.html',
  styleUrl: './updateservices.css'
})
export class Updateservices implements OnInit {
  projectId!: string;
  myForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _services: ServicesServices
  ) {
    this.myForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      icon: new FormControl(''),
    });
  }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id') || '';
    this.loadProject();
  }

  loadProject() {
    this._services.getservicesById(this.projectId).subscribe((project: Iservices) => {
      this.myForm.patchValue({
        title: project.title,
        description: project.description,
        icon: project.icon
      });
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.myForm.patchValue({ image: this.selectedFile });
    }
  }

  submit() {
    const formData = new FormData();
    formData.append('title', this.myForm.get('title')?.value);
    formData.append('description', this.myForm.get('description')?.value);
    formData.append('icon', this.myForm.get('icon')?.value);


    this._services.updateservices(this.projectId, this.myForm.value).subscribe(res => {
      console.log('service updated:', res);
      this.router.navigate(['/dashboard/getservices']);
    });
  }
}

