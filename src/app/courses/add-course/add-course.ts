import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-add-course',
  providers: [],
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatButton,
    MatIcon,
    MatIconButton
],
  templateUrl: './add-course.html',
  styleUrl: './add-course.css'
})
export class AddCourse {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddCourse>
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const courseData = this.form.value;
      this.dialogRef.close(courseData);
    }
  }

  onCancel() {
    this.form.reset();
    this.dialogRef.close();
  }

}

