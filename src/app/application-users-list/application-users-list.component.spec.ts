import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationUsersListComponent } from './application-users-list.component';

describe('ApplicationUsersListComponent', () => {
  let component: ApplicationUsersListComponent;
  let fixture: ComponentFixture<ApplicationUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationUsersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
