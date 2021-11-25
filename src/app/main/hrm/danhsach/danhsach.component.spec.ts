import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DanhsachComponent } from './danhsach.component';

describe('DanhsachComponent', () => {
  let component: DanhsachComponent;
  let fixture: ComponentFixture<DanhsachComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
