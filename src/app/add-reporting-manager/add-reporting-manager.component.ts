import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ReportingManager {
  id: number;
  description: string;
}

@Component({
  selector: 'app-add-reporting-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-reporting-manager.component.html',
  styleUrl: './add-reporting-manager.component.css',
})
export class AddReportingManagerComponent {
  managerTitles: any[] = [{ id: 1, description: 'Stage 1' }];

  newManager: any = {
    description: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.newManager.description) {
      this.managerTitles.push({
        id: this.managerTitles.length + 1,
        description: this.newManager.description,
      });
      this.newManager = {
        description: '',
      };
    }
  }

  editManager(manager: ReportingManager) {
    this.newManager = manager;
  }

  onClose() {
    this.newManager = {
      description: '',
    };
  }

  onDelete(id: number) {
    this.managerTitles = this.managerTitles.filter(
      (manager) => manager.id !== id
    );
  }
}
