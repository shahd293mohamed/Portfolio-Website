import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {ContactService } from '../core/services/contact.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  contactInfo: any;
  contactForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private contactService: ContactService, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadContactInfo();
  }

  loadContactInfo() {
    this.contactService.getContactInfo().subscribe({
      next: data => {this.contactInfo = data
        console.log(data);
        console.log(this.contactInfo);
      },
      error: err => console.error(err)
    });
    
  }

  submitMessage() {
    if (this.contactForm.invalid) return;

    this.contactService.sendMessage(this.contactForm.value).subscribe({
      next: () => {
        this.successMessage = 'Message sent successfully!';
        this.contactForm.reset();
      },
      error: err => {
        this.errorMessage = 'Failed to send message.';
        console.error(err);
      }
    });
  }
}

