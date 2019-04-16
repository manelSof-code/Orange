import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestPwdComponent } from './rest-pwd.component';

describe('RestPwdComponent', () => {
  let component: RestPwdComponent;
  let fixture: ComponentFixture<RestPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
