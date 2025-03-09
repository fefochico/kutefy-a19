import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSmallScreenComponent } from './nav-small-screen.component';

describe('SmallScreenComponent', () => {
  let component: NavSmallScreenComponent;
  let fixture: ComponentFixture<NavSmallScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSmallScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSmallScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
