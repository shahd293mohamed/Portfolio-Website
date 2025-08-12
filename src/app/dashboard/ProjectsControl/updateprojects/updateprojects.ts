import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../../../core/services/projects.services';
import { Iprojects } from '../../../core/model';

@Component({
  selector: 'app-updateprojects',
  imports: [ReactiveFormsModule],
  templateUrl: './updateprojects.html',
  styleUrl: './updateprojects.css'
})
export class UpdateProject implements OnInit {
  projectId!: string;
  myForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _projectsService: ProjectsService
  ) {
    this.myForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      catagory: new FormControl(''),
      technologies: new FormControl(''),
      demoLink: new FormControl(''),
      githubLink: new FormControl(''),
      image: new FormControl(null)
    });
  }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id') || '';
    this.loadProject();
  }

  loadProject() {
    this._projectsService.getProjectById(this.projectId).subscribe((project: Iprojects) => {
      this.myForm.patchValue({
        title: project.title,
        description: project.description,
        catagory: project.catagory,
        technologies: project.technologies.join(', '),
        demoLink: project.demoLink,
        githubLink: project.githubLink
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
    formData.append('catagory', this.myForm.get('catagory')?.value);
    formData.append('technologies', this.myForm.get('technologies')?.value);
    formData.append('demoLink', this.myForm.get('demoLink')?.value);
    formData.append('githubLink', this.myForm.get('githubLink')?.value);

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this._projectsService.updateProject(this.projectId, formData).subscribe(res => {
      console.log('Project updated:', res);
      this.router.navigate(['/dashboard/getprojects']); // go back to list
    });
  }
}
