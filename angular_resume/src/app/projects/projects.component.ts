import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projs: any[] = [];
  newProject: any = {};

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/projects').subscribe(
      (data: any[]) => {
        this.projs = data;
        console.log('Project data:', this.projs); // Log the fetched user data
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  fetchProjects() {
    this.http.get<any[]>('http://localhost:3000/projects').subscribe(
      (data: any[]) => {
        this.projs = data;
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }

  openAddProjectForm() {
    this.router.navigate(['/add-project']);
  }

  addProject() {
    this.http.post('http://localhost:3000/projects', this.newProject).subscribe(
      () => {
        console.log('New project added successfully');
        // Clear the form or close the modal
        this.newProject = {};
        // Refresh the project list
        this.fetchProjects();
      },
      (error) => {
        console.error('Error adding project:', error);
      }
    );
  }

  updateProject(projectId: string) {
    this.router.navigate(['/update-project', projectId]);
  }

  deleteProject(projectId: string) {
    this.http.delete(`http://localhost:3000/projects/${projectId}`).subscribe(
      () => {
        console.log('Project deleted successfully');
        // Optionally, reload the projects list or update the UI
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting project:', error);
      }
    );
  }
  
}
