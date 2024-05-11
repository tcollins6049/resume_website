import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  newProject: any = {};

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  addProject() {
    this.http.post('http://localhost:3000/projects', this.newProject).subscribe(
      () => {
        console.log('New project added successfully');
        // Clear the form
        this.newProject = {};

        this.router.navigate(['/projects']);
      },
      (error) => {
        console.error('Error adding project:', error);
      }
    );
  }
}

