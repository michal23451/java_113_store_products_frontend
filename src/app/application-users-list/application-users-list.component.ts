import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApplicationUsersService } from '../application-users-service/application-users-service';

@Component({
  selector: 'app-application-users-list',
  templateUrl: './application-users-list.component.html',
  styleUrls: ['./application-users-list.component.css']
})
export class ApplicationUsersListComponent implements OnInit {
  displayedColumns: string[] = [
    'identifier',
    'login',
    'name',
    'surname',
    'delete-button'
  ]

  constructor(private snackBar: MatSnackBar, protected applicationUserService: ApplicationUsersService) {

  }

  // Component Lifecycle
  ngOnInit(): void {
    // Po załadowaniu komponentu pobieramy ponownie elementy z backendu (refresh)
    this.applicationUserService.refreshApplicationUserList()
  }

  deleteApplicationUser(id: number): void {
    this.applicationUserService.deleteFromBackend(id)
      .subscribe({
        next: (_) => {
          this.snackBar.open('User has been deleted', undefined, {
            verticalPosition: 'top',
            horizontalPosition: 'start',
            duration: 5000
          })
          this.applicationUserService.refreshApplicationUserList()
        },
        error: (error) => {
          console.log(error)
          this.applicationUserService.refreshApplicationUserList()
        }
      })
  }
}
