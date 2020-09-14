import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FansFormComponent } from './fans-form.component';

describe('FansFormComponent', () => {
  let component: FansFormComponent;
  let fixture: ComponentFixture<FansFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FansFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FansFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
