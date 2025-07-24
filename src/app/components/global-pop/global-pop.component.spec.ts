import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPopComponent } from './global-pop.component';

describe('GlobalPopComponent', () => {
  let component: GlobalPopComponent;
  let fixture: ComponentFixture<GlobalPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalPopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
