import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicularComponent } from './cicular.component';

describe('CicularComponent', () => {
  let component: CicularComponent;
  let fixture: ComponentFixture<CicularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
