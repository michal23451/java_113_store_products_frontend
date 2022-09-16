import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationUsersFormComponent } from './application-users-form.component';

describe('ApplicationUsersFormComponent', () => {
  let component: ApplicationUsersFormComponent;
  let fixture: ComponentFixture<ApplicationUsersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationUsersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationUsersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
