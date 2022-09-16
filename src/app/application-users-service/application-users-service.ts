import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export type ApplicationUser = {
  id: number | null;
  login: string;
  pass: string;
  name: string;
  surname: string;
};

@Injectable({
  providedIn: 'root',
})
export class ApplicationUsersService {
  applicationUserList: ApplicationUser[] = [];
  loadingList: boolean = false;

  constructor(private http: HttpClient) {}

  public refreshApplicationUserList(): void {
    this.loadingList = true;

    this.http.get('http://localhost:8080/api/user').subscribe((data) => {
      // promise
      this.loadingList = false;
      console.log(data);

      let receivedApplicationUserList = data as ApplicationUser[];
      this.applicationUserList = receivedApplicationUserList;
    });
  }

  public getDefautApplicationUserModel(): ApplicationUser {
    return {
      id: null,
      login: '',
      pass: '',
      name: '',
      surname: '',
    };
  }

  public sendApplicationUserToBackend(
    applicationUser: ApplicationUser
  ): Observable<Object> {
    return this.http.post('http://localhost:8080/api/user', applicationUser);
  }

  public deleteFromBackend(applicationUserId: number): Observable<Object> {
    return this.http.delete(
      'http://localhost:8080/api/user/' + applicationUserId
    );
  }
}
