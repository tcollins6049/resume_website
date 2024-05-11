import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  projectId: string = '';
  project: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = params['id'];
      this.fetchProject(this.projectId);
    });
  }

  fetchProject(projectId: string) {
    this.http.get<any>(`http://localhost:3000/projects/${projectId}`).subscribe(
      (data) => {
        this.project = data;
      },
      (error) => {
        console.error('Error fetching project:', error);
      }
    );
  }

  updateProject() {
    this.http.put(`http://localhost:3000/projects/${this.projectId}`, this.project, { responseType: 'text' }).subscribe(
      (response) => {
        console.log('Response from server:', response);
        this.router.navigate(['/projects']);
        // Other logic
      },
      (error: HttpErrorResponse) => {
        console.error('Error updating project:', error);
      }
    );
  }
}

