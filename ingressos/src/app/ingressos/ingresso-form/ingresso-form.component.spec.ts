import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressoFormComponent } from './ingresso-form.component';

describe('IngressoFormComponent', () => {
  let component: IngressoFormComponent;
  let fixture: ComponentFixture<IngressoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngressoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngressoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
