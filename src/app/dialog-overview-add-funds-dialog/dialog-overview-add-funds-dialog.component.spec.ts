import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewAddFundsDialogComponent } from './dialog-overview-add-funds-dialog.component';

describe('DialogOverviewAddFundsDialogComponent', () => {
  let component: DialogOverviewAddFundsDialogComponent;
  let fixture: ComponentFixture<DialogOverviewAddFundsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOverviewAddFundsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverviewAddFundsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
