import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeServices } from '../../../core/services/home.services';
import { Ihome } from '../../../core/model';

@Component({
  selector: 'app-updatehome',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './updatehome.html',
  styleUrl: './updatehome.css'
})
export class Updatehome implements OnInit {
  homeId!: string;
  myForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _home: HomeServices
  ) {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      bio: new FormControl(''),
      image: new FormControl(null)
    });
  }

  ngOnInit() {
    this.homeId = this.route.snapshot.paramMap.get('id') || '';
    this.loadHome();
  }

  loadHome() {
    this._home.getHomeById(this.homeId).subscribe((home: Ihome) => {
      this.myForm.patchValue({
        name: home.name,
        bio: home.bio
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
    formData.append('name', this.myForm.get('name')?.value);
    formData.append('bio', this.myForm.get('bio')?.value);

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this._home.updateHome(this.homeId, formData).subscribe(res => {
      console.log('Home updated:', res);
      this.router.navigate(['/dashboard/gethome']); // adjust to your route
    });
  }
}
