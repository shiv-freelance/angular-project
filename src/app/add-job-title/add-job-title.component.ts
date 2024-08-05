import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Job {
  id: number;
  description: string;
}

@Component({
  selector: 'app-add-job-title',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-job-title.component.html',
  styleUrl: './add-job-title.component.css',
})
export class AddJobTitleComponent {
  jobs: any[] = [
    { id: 1, description: 'Description for Stage 1' },
  ];

  newJob: any = {
    id: 0,
    description: '',
  };


  addJob() {
    this.newJob.id = this.jobs.length + 1;
    if (this.newJob.description) {
      this.jobs.push(this.newJob);
    }
    this.newJob = {
      id: 0,
      description: '',
    };
  }

  editJob(job: Job) {
    this.newJob = job;
  }

  saveEdit() {
    if (this.newJob) {
      const index = this.jobs.findIndex((job) => job.id === this.newJob.id);
      if (index !== -1) {
        this.jobs[index] = this.newJob;
      }
    }
  }

  onClose() {
    this.newJob = {
      id: 0,
      description: '',
    };
  }

  deleteJob(id: number) {
    this.jobs = this.jobs.filter((job) => job.id !== id);
  }
}
