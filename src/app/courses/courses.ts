import { Component, signal } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddCourse } from './add-course/add-course';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor?: string;
}

@Component({
  selector: 'app-courses',
  providers: [MatDialogModule],
  imports: [MatFabButton, MatIcon],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {

  courses = signal<Course[]>([]);

  constructor(private dialog: MatDialog) {
    this.courses.set([
      { id: 1, title: 'Angular Basics', description: 'Learn the basics of Angular.', instructor: 'John Doe' },
      { id: 2, title: 'Advanced Angular', description: 'Deep dive into Angular features.', instructor: 'Jane Smith' },
      { id: 3, title: 'TypeScript Fundamentals', description: 'Understand TypeScript for Angular development.' }
    ]);
  }

  addCourse() {
    let dialogRef = this.dialog.open(AddCourse, {
      width: '90%',
      height: 'fit-content',
      maxHeight: '80vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newCourse: Course = {
          id: this.courses().length + 1,
          title: result.title,
          description: result.description
        };
        this.courses.update(courses => [...courses, newCourse]);
      }
    })
  }

  removeCourse(courseId: number) {
    this.courses.update(courses => courses.filter(course => course.id !== courseId));
  }
}
