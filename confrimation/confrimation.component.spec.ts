import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrimationComponent } from './confrimation.component';

describe('ConfrimationComponent', () => {
  let component: ConfrimationComponent;
  let fixture: ComponentFixture<ConfrimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfrimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfrimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
