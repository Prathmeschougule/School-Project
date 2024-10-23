import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreePrimarySchoolComponent } from './pree-primary-school.component';

describe('PreePrimarySchoolComponent', () => {
  let component: PreePrimarySchoolComponent;
  let fixture: ComponentFixture<PreePrimarySchoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreePrimarySchoolComponent]
    });
    fixture = TestBed.createComponent(PreePrimarySchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
