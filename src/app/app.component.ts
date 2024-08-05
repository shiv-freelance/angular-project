import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddJobTitleComponent } from './add-job-title/add-job-title.component';
import { AddReportingManagerComponent } from './add-reporting-manager/add-reporting-manager.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    AddJobTitleComponent,
    AddReportingManagerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'teja_project';
}
