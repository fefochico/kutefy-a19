import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBigScreenComponent } from './nav-big-screen.component';

describe('BigScreenComponent', () => {
  let component: NavBigScreenComponent;
  let fixture: ComponentFixture<NavBigScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBigScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBigScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
