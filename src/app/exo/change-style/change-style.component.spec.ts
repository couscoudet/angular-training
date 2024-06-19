import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStyleComponent } from './change-style.component';

describe('ChangeStyleComponent', () => {
  let component: ChangeStyleComponent;
  let fixture: ComponentFixture<ChangeStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeStyleComponent]
    });
    fixture = TestBed.createComponent(ChangeStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
