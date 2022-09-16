import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApplicationUser, ApplicationUsersService } from '../application-users-service/application-users-service';

@Component({
  selector: 'app-application-users-form',
  templateUrl: './application-users-form.component.html',
  styleUrls: ['./application-users-form.component.css']
})
export class ApplicationUsersFormComponent implements OnInit {
  @ViewChild('ref') child: ElementRef|any;

  applicationUser: ApplicationUser;
  sendingApplicationUser: boolean = false;

  notification: string|null = null;

  constructor(private renderer: Renderer2,
              private router: Router,
              private applicationUserService: ApplicationUsersService,
              private snackBar: MatSnackBar) {
    this.applicationUser = applicationUserService.getDefautApplicationUserModel()
  }

  ngOnInit(): void {
  }

  sendApplicationUser(): void {
    this.sendingApplicationUser = true;

    this.applicationUserService.sendApplicationUserToBackend(this.applicationUser)
      .subscribe({ // promise
        next: (data) => {
          this.sendingApplicationUser = false;
          this.snackBar.open('Application user has been added', undefined, {
            verticalPosition: 'top',
            horizontalPosition: 'start',
            duration: 5000
          })

          // po dodaniu obiektu przekieruj na listę
          this.router.navigate(['/users'])
          console.log(data)
        },
        error: (error) => {
          this.sendingApplicationUser = false;
          this.notification = error.message

          setTimeout(() => {
            this.renderer.addClass(this.child.nativeElement, 'hidden');
            setTimeout(() => {
              // po 5 sekundach wyczyść powiadomienie o błędzie
              this.notification = null;
            }, 1000)
          }, 3000)

        }
      })
  }

  clearForm(): void {
    this.applicationUser = this.applicationUserService.getDefautApplicationUserModel()
  }
}
